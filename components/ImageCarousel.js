"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ImageCarousel({ images = [], alt = "Project" }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, images.length, next]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main Image */}
      <div className="carousel-main">
        <Image
          src={images[active]}
          alt={`${alt} — View ${active + 1}`}
          width={1200}
          height={675}
          className="carousel-image"
          priority={active === 0}
        />
        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => setActive((prev) => (prev - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={next}
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </>
        )}
        {/* Counter */}
        <div className="carousel-counter">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="carousel-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`carousel-thumb ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={75} className="thumb-img" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
