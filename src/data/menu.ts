export interface MenuItem {
  id: number;
  name: string;
  tag: string;
  price: string;
  image: string;
  description: string;
}

export const signatureMenu: MenuItem[] = [
  {
    id: 1,
    name: "Belgian Classic",
    tag: "Signature",
    price: "₹199",
    image: "/assets/menu/classic-belgian.webp",
    description: "Golden Belgian waffle served with whipped cream, maple syrup and powdered sugar.",
  },
  {
    id: 2,
    name: "Royal Biscoff",
    tag: "Bestseller",
    price: "₹249",
    image: "/assets/menu/royal-biscoff.webp",
    description: "Loaded with Lotus Biscoff spread, cookie crumble and whipped cream.",
  },
  {
    id: 3,
    name: "Blueberry Classic",
    tag: "Fruity Favourite",
    price: "₹229",
    image: "/assets/menu/blueberry-classic.webp",
    description: "Fresh blueberry compote with silky whipped cream on a crispy Belgian waffle.",
  },
  {
    id: 4,
    name: "Naked Nutella",
    tag: "Chocolate Lover",
    price: "₹239",
    image: "/assets/menu/naked-nutella.webp",
    description: "Warm Belgian waffle completely covered in rich Nutella and chocolate drizzle.",
  },
  {
    id: 5,
    name: "Milk Chocolate Overload",
    tag: "Chocolate Special",
    price: "₹249",
    image: "/assets/menu/milk-chocolate-overload.webp",
    description: "Chocolate sauce, chocolate chips and creamy milk chocolate topping.",
  },
  {
    id: 6,
    name: "Chocolate Chip Waffle",
    tag: "Crowd Favourite",
    price: "₹239",
    image: "/assets/menu/chocolate-chip.webp",
    description: "Belgian waffle served with vanilla ice cream and chocolate chips.",
  },
  {
    id: 7,
    name: "Red Velvet Heart",
    tag: "Limited Favourite",
    price: "₹259",
    image: "/assets/menu/red-velvet-heart.webp",
    description: "Red velvet waffle topped with cream cheese frosting and strawberry drizzle.",
  },
  {
    id: 8,
    name: "Lotus Cheesecake Waffle",
    tag: "Premium Dessert",
    price: "₹279",
    image: "/assets/menu/lotus-cheesecake-waffle.webp",
    description: "Lotus cheesecake filling finished with whipped cream and crushed Biscoff biscuits.",
  },
];
