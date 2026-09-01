export interface Review {
  id: number;
  name: string;
  meta: string;
  avatar: string;
  quote: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Ritika S.",
    meta: "Google Review · 2 weeks ago",
    avatar: "/assets/avatars/reviewer-01.png",
    quote: "Went here on a whim and now it's basically my Sunday spot. The Royal Biscoff is stupid good, get it warm.",
  },
  {
    id: 2,
    name: "Aniket R.",
    meta: "Google Review · 1 month ago",
    avatar: "/assets/avatars/reviewer-02.png",
    quote: "Coffee's actually good here, not just an afterthought to the desserts. Sat for two hours and nobody rushed us out.",
  },
  {
    id: 3,
    name: "Priya D.",
    meta: "Google Review · 3 weeks ago",
    avatar: "/assets/avatars/reviewer-03.png",
    quote: "Ordered the Lotus Cheesecake Waffle for my birthday and it did not disappoint. Staff even remembered my name from last time.",
  },
];
