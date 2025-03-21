import { getProductById } from "@/services/productServices";

export default function Handler(request, response) {
  const { id } = request.query;
  const selectedProduct = getProductById(id);

  if (!selectedProduct) {
    return response.status(404).json("not found");
  }
  return response.status(200).json(selectedProduct);
}
