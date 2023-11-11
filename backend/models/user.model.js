// Import the mongoose module to handle operations with MongoDB.
const mongoose = require('mongoose');

// Reference the Schema constructor from the mongoose object. This is used to define the shape of documents within a collection.
const Schema = mongoose.Schema;

// Create a new instance of a Mongoose Schema to define the structure and rules for user data.
const userSchema = new Schema({
    username: {
        type: String,        // Define the 'username' field as a string type.
        required: true,      // Make the 'username' field required, meaning it must be provided.
        unique: true,        // Ensure that each 'username' is unique in the database.
        trim: true,          // Automatically remove any leading or trailing whitespace.
        minLength: 3         // Set the minimum length of the 'username' to 3 characters.
    },
}, {
    timestamps: true,       // Automatically create and update 'createdAt' and 'updatedAt' fields.
});

// Compile the userSchema into a model; a model is a class with which we construct documents.
// In this case, each document will be a user with properties and behaviors as declared in our schema.
const User = mongoose.model('User', userSchema);

// Export the User model, allowing it to be imported and used in other parts of the application.
module.exports = User;
