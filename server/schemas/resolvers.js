const { AuthenticationError } = require("apollo-server-express");
const { Admin } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // check if admins exist
            if (context.admin) {
                const adminData = await Admin.findOne({ _id: context.admin._id }).select(
                    "-__v -password"
                );
                return adminData;
            }
            throw new AuthenticationError("Not logged in");
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const admin = await Admin.findOne({ email });
            // check if admin exists with email and credentials
            if (!admin) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const correctPassword = await admin.isCorrectPassword(password);

            // check password
            if (!correctPassword) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(admin);
            return { token, admin };
        },
    },
};

module.exports = resolvers;