import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const allProducts = await Product.find();
    return response.status(200).json(allProducts);
  } else if (request.method === "POST") {
    const productData = request.body;
    Product.create(productData);

    return response.status(201).json({ status: "Success - Product created!" });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
