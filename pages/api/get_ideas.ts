import { connectMongoDB } from "@/libs/MongoConnect";
import Idea from "@/models/Idea.model";

export default async function handler(req: { method: string }, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ mgs: "Only GET request are allowed." });
    return;
  }

  try {
    await connectMongoDB();
    const event = await Idea.find();
    res.status(200).send(event);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, mgs: "Sothing went wrong!" });
  }
}
