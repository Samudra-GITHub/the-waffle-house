export interface MenuItem {
  id: number;
  name: string;
  tag: string;
  price: string;
  image: string;
  description: string;
}

export const signatureMenu: MenuItem[] = [
  { id: 1, name: "Belgian Classic", tag: "Signature", price: "₹199", image: "/assets/menu/classic-belgian.jpg", description: "Golden Belgian waffle served with whipped cream, maple syrup and powdered sugar." },
  { id: 2, name: "Royal Biscoff", tag: "Bestseller", price: "₹249", image: "/assets/menu/royal-biscoff.jpg", description: "Loaded with Lotus Biscoff spread, cookie crumble and whipped cream." },
  { id: 3, name: "Blueberry Classic", tag: "Fruity Favourite", price: "₹229", image: "/assets/menu/blueberry-classic.jpg", description: "Fresh blueberry compote with silky whipped cream on a crispy Belgian waffle." },
  { id: 4, name: "Naked Nutella", tag: "Chocolate Lover", price: "₹239", image: "/assets/menu/naked-nutella.jpg", description: "Warm Belgian waffle completely covered in rich Nutella and chocolate drizzle." },
  { id: 5, name: "Milk Chocolate Overload", tag: "Chocolate Special", price: "₹249", image: "/assets/menu/milk-chocolate-overload.jpg", description: "Chocolate sauce, chocolate chips and creamy milk chocolate topping." },
  { id: 6, name: "Chocolate Chip Waffle", tag: "Crowd Favourite", price: "₹239", image: "/assets/menu/chocolate-chip.jpg", description: "Belgian waffle served with vanilla ice cream and chocolate chips." },
  { id: 7, name: "Red Velvet Heart", tag: "Limited Favourite", price: "₹259", image: "/assets/menu/red-velvet-heart.jpg", description: "Red velvet waffle topped with cream cheese frosting and strawberry drizzle." },
  { id: 8, name: "Lotus Cheesecake Waffle", tag: "Premium Dessert", price: "₹279", image: "/assets/menu/lotus-cheesecake-waffle.jpg", description: "Lotus cheesecake filling finished with whipped cream and crushed Biscoff biscuits." },
];

export const reviews = [
  { id: 1, name: "Ritika S.", meta: "Google Review · 2 weeks ago", avatar: "/assets/avatars/reviewer-01.jpg", quote: "Went here on a whim and now it's basically my Sunday spot. The Royal Biscoff is stupid good, get it warm." },
  { id: 2, name: "Aniket R.", meta: "Google Review · 1 month ago", avatar: "/assets/avatars/reviewer-02.jpg", quote: "Coffee's actually good here, not just an afterthought to the desserts. Sat for two hours and nobody rushed us out." },
  { id: 3, name: "Priya D.", meta: "Google Review · 3 weeks ago", avatar: "/assets/avatars/reviewer-03.jpg", quote: "Ordered the Lotus Cheesecake Waffle for my birthday and it did not disappoint. Staff even remembered my name from last time." },
];

export const gallery = [
  { id: 1, src: "/assets/gallery/gallery-01.jpg", alt: "Golden Belgian waffle plated with fresh berries at The Waffle House", height: 500 },
  { id: 2, src: "/assets/gallery/gallery-02.jpg", alt: "Cozy corner seating inside The Waffle House, Shivmandir", height: 320 },
  { id: 3, src: "/assets/gallery/gallery-03.jpg", alt: "Close-up of caramel drizzle over a waffle at The Waffle House", height: 560 },
  { id: 4, src: "/assets/gallery/gallery-04.jpg", alt: "Iced coffee and waffle flatlay at The Waffle House", height: 400 },
  { id: 5, src: "/assets/gallery/gallery-05.jpg", alt: "Friends sharing desserts at The Waffle House, Siliguri", height: 480 },
  { id: 6, src: "/assets/gallery/gallery-06.jpg", alt: "Cheesecake slice plated at The Waffle House", height: 340 },
];
