const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true,
        emun : ["admin", "manager", "user"]
    }
},
{
    timestamps : true
}
);

module.exports = mongoose.model("User", userSchema);