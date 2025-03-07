"use client";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardFooter } from "@repo/ui/card";
import { cartItemState, cartState } from "@/recoil/atom";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function FeaturedProducts({ products }: { products: any }) {
  const [isCartOpen, setIsCartOpen] = useRecoilState(cartState);
  const [cartItems, setCartItems] = useRecoilState<any>(cartItemState);
  const [featuredProducts, setfeaturedProducts] = useState<any>(products);
  const router = useRouter();

  const handelBuyNow = (product: any) => {
    const existingProduct = cartItems.find(
      (item: any) => item.id === product.id
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    router.push("/checkout");
  };

  const handleAddToCart = (product: any) => {
    const existingProduct = cartItems.find(
      (item: any) => item.id === product.id
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Otherwise, add the product to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-white py-16" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map((product: any) => (
            <Card
              key={product.id}
              className="flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href={`products/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-bold">Rs.{product.price}</p>
                </div>
              </CardContent>

              <CardFooter className="p-4">
                <Button
                  className="w-full mr-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  className="w-full ml-2"
                  onClick={() => handelBuyNow(product)}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
