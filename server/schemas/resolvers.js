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
        addAdmin: async (parent, args) => {
            const admin = await Admin.create(args);
            const token = signToken(admin);
      
            return { token, admin };
          },
        addedCake: async (parent, { input }, context) => {
            if (context.cake) {
                const updatedCake = await Cake.findOneAndUpdate(
                    { _id: context.cake._id },
                    { $addToSet: { savedCake: input } },
                    { new: true, runValidators: true }
                );
                return updatedCake;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removeCake: async (parent, { cakeId }, context) => {
            if (context.user) {
                const updatedUser = await Cake.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedCake: { cakeId: cakeId } } },
                    { new: true }
                );
                return updatedCake;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers;