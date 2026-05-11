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

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next(); // swipe left -> next
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + images.length) % images.length); // swipe right -> prev
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main Image Container for Sliding */}
      <div 
        className="carousel-main"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="carousel-inner" 
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <Image
                src={img}
                alt={`${alt} — View ${i + 1}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={100}
                className="carousel-image"
                priority={i === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

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
