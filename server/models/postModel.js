import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  desc: { type: String, required: true },
  likes: [{ type: String }],
  image: String,
}, {
  timestamps: true,
});


var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
