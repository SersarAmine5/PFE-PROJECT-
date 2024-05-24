import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    roomId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    initialProblem: {
      type: String,
      required: true,
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
    userId: {
      type: String,
      required: false,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", RoomSchema);
export default Room;
