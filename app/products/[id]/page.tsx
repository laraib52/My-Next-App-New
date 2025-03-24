"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProductDetail() {
  const params = useParams();
  const productId = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure `id` is a string

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", productId], // Correct queryKey format
    queryFn: async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      return response.data;
    },
    enabled: !!productId, // Prevent query if productId is undefined
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover my-4" />
      <p className="text-xl font-semibold">${product.price}</p>
      <p className="mt-2 text-gray-600">{product.description}</p>
    </div>
  );
}
