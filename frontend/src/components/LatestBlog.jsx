import lb1 from "/assets/Lb-1.jpg";
import lb2 from "/assets/Lb-2.jpg";
import lb3 from "/assets/Lb-3.jpg";

export default function LatestBlog() {
  return (
    <section className="latest-blog">
      <div className="container">
        <h2 className="lb-title">Latest Blog</h2>
      </div>
      <div className="lb-grid">
        <article className="lb-card">
          <a className="lb-thumb" href="#">
            <img className="lb-img" src={lb1} alt="men's Fashion Trends" />
          </a>
          <div className="lb-body">
            <div className="lb-meta">
              <i className="fa-regular fa-calendar"></i>
              <time dateTime="2024-08-01">August 01, 2024</time>
            </div>
            <a className="lb-heading" href="#">
              A Glimpse into Men's Fashion Trends: What's Hot and What's Not
            </a>
            <p className="lb-description">
              Quick insights into the pieces and palettes dominating this
              season—and what to skip.
            </p>
            <a className="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
        <article className="lb-card">
          <a className="lb-thumb" href="#">
            <img className="lb-img" src={lb3} alt="men's Fashion Trends" />
          </a>
          <div className="lb-body">
            <div className="lb-meta">
              <i className="fa-regular fa-calendar"></i>
              <time dateTime="2024-08-01">August 01, 2024</time>
            </div>
            <a className="lb-heading" href="#">
              A Glimpse into Men's Fashion Trends: What's Hot and What's Not
            </a>
            <p className="lb-description">
              From relaxed tailoring to heritage textures—how to style them
              without overdoing it.
            </p>
            <a className="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
        <article className="lb-card">
          <a className="lb-thumb" href="#">
            <img className="lb-img" src={lb2} alt="women's Fashion Trends" />
          </a>
          <div className="lb-body">
            <div className="lb-meta">
              <i className="fa-regular fa-calendar"></i>
              <time dateTime="2024-08-01">August 01, 2024</time>
            </div>
            <a className="lb-heading" href="#">
              Fashion Do’s and Don’ts Every Woman Should Know
            </a>
            <p className="lb-description">
              Simple rules to build outfits that always work—across seasons and
              occasions.
            </p>
            <a className="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
