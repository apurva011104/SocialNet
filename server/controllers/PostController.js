import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";
import mongoose from "mongoose";

// Creating a post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id).populate("userId", "name username profilePicture");
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Like/dislike a post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get timeline posts
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUser = await UserModel.findById(userId);
    const currentUserPosts = await PostModel.find({ userId: userId }).populate("userId", "name username profilePicture");
    const followingPosts = await PostModel.find({
      userId: { $in: currentUser.following },
    }).populate("userId", "name username profilePicture");
    const allPosts = [...currentUserPosts, ...followingPosts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};
