import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../styles/slider.css";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, playOnInit: true }, [
    Autoplay(),
  ]);
  return (
    <div className="container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="embla__slide" key={i}>
              <a href="#" className="insta-item">
                <img
                  src={`../assets/inst-${i + 1}-min.webp`}
                  alt={`Instagram ${i + 1}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
