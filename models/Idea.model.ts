// const mongoose = require("mongoose");

// const IdeaSchema = new mongoose.Schema({
//   title: String,
//   time: String,
// });

// const Idea = mongoose.model("Ideas", IdeaSchema);

// export default Idea;
import { Schema, model, models } from "mongoose";
const IdeaSchema = new Schema({
  title: String,
  time: String,
});
const Idea = models.Ideas || model("Ideas", IdeaSchema);
export default Idea;
