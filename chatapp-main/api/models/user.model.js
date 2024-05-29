import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    lastname: {
      type: String,
      required: false,
      unique: false
    },
    firstname: {
      type: String,
      required: false,
      unique: false
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    is_email_confirmed: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator", "utilisateur expert"],
      default: "user",
    },
    isSubmited: {
      type: Boolean,
      default: false,
    },
    Area_of_expertise: {
      type: String,
      required: false,
    },
    // Area_of_expertise: {
    //   type: [String],
    //   required: false,
    // },
    Highest_degree: {
      type: String,
      required: false,
    },
    // topic_subscribed_at: [
    //   {
    //     topic_id: {
    //       type: Schema.Types.ObjectId,
    //       ref: "Topic",
    //     },
    //     is_expert: {
    //       type: Boolean,
    //       default: false,
    //     },
    //     subscribed_at: {
    //       type: Date,
    //       default: () => Date.now(),
    //     },
    //   },
    // ],
    center_of_interest: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
