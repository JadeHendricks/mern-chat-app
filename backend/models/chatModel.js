const mongoose = require('mongoose');

const chatModel =  mongoose.Schema(
    {
        chatName: { type: string, trim: true },
        isGroupChat: { type: boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "messages"
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    { 
        timestamps: true
    }
)

//name of the model + model
const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;