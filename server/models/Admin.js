/* Destructuring the Schema and model properties from the mongoose module. */
const { Schema, model } = require("mongoose");

/* Importing the bcrypt module. */
const bcrypt = require("bcrypt");

/* This is creating a new schema for the admin model. */
const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
});

/* This is a pre-save hook that will hash the password before saving it to the database. */
adminSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

/* This is a method that is being added to the adminSchema. It is being used to compare the password
that is being passed in with the password that is stored in the database. */
adminSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

/* Creating a new model called Admin. */
const Admin = model("Admin", adminSchema);

/* Exporting the Admin model so that it can be used in other files. */
module.exports = Admin;