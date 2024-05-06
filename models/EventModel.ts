import { Schema, model, models } from "mongoose";
const EventSchema = new Schema({
  title: String,
  time: String,
});
const Event = models.Events || model("Events", EventSchema);
export default Event;
