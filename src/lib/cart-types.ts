export type CartItem = {
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export type CartProduct = Pick<
  CartItem,
  "slug" | "name" | "price" | "imageUrl"
>;
