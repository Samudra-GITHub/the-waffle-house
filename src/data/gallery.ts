export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  height: number;
}

export const gallery: GalleryImage[] = [
  { id: 1, src: "/assets/gallery/gallery-01.webp", alt: "Golden Belgian waffle plated with fresh berries at The Waffle House", height: 500 },
  { id: 2, src: "/assets/gallery/gallery-02.webp", alt: "Cozy corner seating inside The Waffle House, Shivmandir", height: 320 },
  { id: 3, src: "/assets/gallery/gallery-03.webp", alt: "Close-up of caramel drizzle over a waffle at The Waffle House", height: 560 },
  { id: 4, src: "/assets/gallery/gallery-04.webp", alt: "Iced coffee and waffle flatlay at The Waffle House", height: 400 },
  { id: 5, src: "/assets/gallery/gallery-05.webp", alt: "Friends sharing desserts at The Waffle House, Siliguri", height: 480 },
  { id: 6, src: "/assets/gallery/gallery-06.webp", alt: "Cheesecake slice plated at The Waffle House", height: 340 },
];
