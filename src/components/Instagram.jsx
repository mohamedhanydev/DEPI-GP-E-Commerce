import inst1 from "../assets/inst-1-min.webp";
import inst2 from "../assets/inst-2-min.webp";
import inst3 from "../assets/inst-3-min.webp";
import inst4 from "../assets/inst-4-min.webp";
import inst5 from "../assets/inst-5-min.webp";

export default function Instagram() {
  return (
    <section className="insta-section">
      <div className="container-text">
        <h2 className="mb-1">Follow on Instagram</h2>
        <p className="text-grey">@marino-themes</p>
      </div>
      <div className="container">
        <div className="insta-slider">
          <div className="insta-strip" aria-label="Instagram gallery">
            <a href="#" className="insta-item">
              <img src={inst1} alt="Instagram 1" />
            </a>
            <a href="#" className="insta-item">
              <img src={inst2} alt="Instagram 2" />
            </a>
            <a href="#" className="insta-item">
              <img src={inst3} alt="Instagram 3" />
            </a>
            <a href="#" className="insta-item">
              <img src={inst4} alt="Instagram 4" />
            </a>
            <a href="#" className="insta-item">
              <img src={inst5} alt="Instagram 5" />
            </a>
            <a href="#" className="insta-item">
              <img src={inst2} alt="Instagram 6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
