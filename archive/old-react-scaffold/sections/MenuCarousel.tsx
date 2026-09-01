import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { MenuCard } from "./menu/MenuCard";
import { signatureMenu } from "../data/menu";

const TOTAL = signatureMenu.length;
const HALF = Math.floor(TOTAL / 2);

function posFor(index: number, current: number) {
  let offset = index - current;
  if (offset > HALF) offset -= TOTAL;
  if (offset < -HALF) offset += TOTAL;
  if (offset === 0) return "center" as const;
  if (offset === 1) return "right1" as const;
  if (offset === -1) return "left1" as const;
  if (offset === 2) return "right2" as const;
  if (offset === -2) return "left2" as const;
  return "hidden" as const;
}

export function MenuCarousel() {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [autoplayOn, setAutoplayOn] = useState(false);
  const pausedRef = useRef(false);

  const goTo = (i: number) => setCurrent(((i % TOTAL) + TOTAL) % TOTAL);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Start autoplay only once the carousel has actually been seen, so slide 0
  // (the only one visually distinguishable at t=0 anyway) is centered when
  // a visitor first arrives — mirrors the vanilla implementation's approach.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAutoplayOn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplayOn || reduceMotion) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setCurrent((c) => (c + 1) % TOTAL);
    }, 5000);
    return () => clearInterval(id);
  }, [autoplayOn, reduceMotion]);

  const positions = useMemo(() => signatureMenu.map((item) => ({ item, pos: posFor(item.id - 1, current) })), [current]);

  return (
    <section className="section menu-carousel-section" id="menu">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Signature Menu</p>
          <h2>Eight Ways to Fall in Love with a Waffle.</h2>
          <p>Every waffle is made fresh to order using premium ingredients, handcrafted sauces and generous toppings in the heart of Shivmandir, Siliguri.</p>
        </Reveal>
      </div>

      <div
        className="menu-carousel"
        ref={rootRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Signature menu, use left and right arrow keys to browse"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onFocus={() => (pausedRef.current = true)}
        onBlur={(e) => {
          if (!rootRef.current?.contains(e.relatedTarget as Node)) pausedRef.current = false;
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { prev(); e.preventDefault(); }
          else if (e.key === "ArrowRight") { next(); e.preventDefault(); }
        }}
      >
        <div className="menu-carousel__glow" aria-hidden="true" />
        <span className="menu-carousel__float menu-carousel__float--blueberry float-ingredient--drift" aria-hidden="true" />
        <span className="menu-carousel__float menu-carousel__float--chip float-ingredient--spin" aria-hidden="true" />
        <span className="menu-carousel__float menu-carousel__float--crumb float-ingredient--sway" aria-hidden="true" />
        <span className="menu-carousel__float menu-carousel__float--mint float-ingredient--drift" aria-hidden="true" />

        <div className="menu-carousel__stage">
          <motion.div
            className="menu-carousel__track"
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40) next();
              else if (info.offset.x > 40) prev();
            }}
          >
            {positions.map(({ item, pos }) => (
              <MenuCard key={item.id} item={item} pos={pos} />
            ))}
          </motion.div>

          <button className="menu-carousel__arrow menu-carousel__arrow--prev" onClick={prev} aria-label="Show previous waffle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button className="menu-carousel__arrow menu-carousel__arrow--next" onClick={next} aria-label="Show next waffle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="menu-carousel__dots" role="tablist" aria-label="Choose a waffle">
          {signatureMenu.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-label={`Show ${item.name}`}
              aria-selected={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
