import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../styles/slider.css";
import inst1 from "../assets/inst-1-min.webp";
import inst2 from "../assets/inst-2-min.webp";
import inst3 from "../assets/inst-3-min.webp";
import inst4 from "../assets/inst-4-min.webp";
import inst5 from "../assets/inst-5-min.webp";

const images = [inst1, inst2, inst3, inst4, inst5];
export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, playOnInit: true }, [
    Autoplay(),
  ]);
  return (
    <div className="container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, i) => (
            <div className="embla__slide" key={i}>
              <a href="#" className="insta-item">
                <img src={image} alt={`Instagram ${i + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
