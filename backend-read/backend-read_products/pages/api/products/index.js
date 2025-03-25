import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const allProducts = await Product.find();
    return response.status(200).json(allProducts);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
