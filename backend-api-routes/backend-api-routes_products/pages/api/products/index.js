import { getAllProducts } from "@/services/productServices";

export default function Handler(request, response) {
  return response.status(200).json(getAllProducts());
}
