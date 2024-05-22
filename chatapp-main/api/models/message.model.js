import mongoose from "mongoose";
const { Schema } = mongoose;
const messageSchema = new Schema(
  {
    contenu: {
      type: String,
      required: true,
    },

    date_heure_envoie: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      ref: "user"
    },
    roomID: {
      type: String,
      required: true,
    },
    is_message_pinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
