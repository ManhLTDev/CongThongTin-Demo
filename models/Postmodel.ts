import { Schema, model, models } from "mongoose";
const PostSchema = new Schema({
  title: String,
  time: String,
  url: String,
});
const Post = models.Posts || model("Posts", PostSchema);
export default Post;
