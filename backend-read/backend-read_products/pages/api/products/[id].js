import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
