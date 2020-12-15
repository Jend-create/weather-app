const mongoose = require('mongoose')


/**
 * userSchema:
 *   1. firstName   --> String, required
 *   2. lastName    --> String, required
 *   3. email       --> String, required, unique
 *   4. password    --> String, required
 *   5. dateCreated --> Date, Date.now
 *   6. active      --> Boolean (true/false)  true
 *   7. isSuperuser --> Boolean (true/false)  false
 */


const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    active: {type: Boolean, default: true},
    isSuperuser: {type: Boolean, default: false}
})


userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
})

// Hash password before saving 

userSchema.pre("save", function(){

})


const User = mongoose.model("User", userSchema)


module.exports = User