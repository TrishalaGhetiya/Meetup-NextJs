import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://trishalaghetiya:Th1OXj3NFcM1kTug@cluster0.fer7r1e.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Todo Inserted" });
  }
};

export default handler;
