import { connectMongoDB } from "@/libs/MongoConnect";
import Post from "@/models/Postmodel";

export default async function handler(req: { method: string }, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ mgs: "Only GET request are allowed." });
    return;
  }

  try {
    await connectMongoDB();
    const post = await Post.find();
    res.status(200).send(post);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, mgs: "Sothing went wrong!" });
  }
}
