export default function LatestBlog() {
  return (
    <section class="latest-blog">
      <div class="container">
        <h2 class="lb-title">Latest Blog</h2>
      </div>
      <div class="lb-grid">
        {/* <!-- start Card 1 --> */}
        <article class="lb-card">
          <a class="lb-thumb" href="#">
            <img
              class="lb-img"
              src="assets/images/Lb-1.jpg"
              alt="men's Fashion Trends"
            />
          </a>
          <div class="lb-body">
            <div class="lb-meta">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="2024-08-01">August 01, 2024</time>
            </div>
            <a class="lb-heading" href="#">
              A Glimpse into Men's Fashion Trends: What's Hot and What's Not
            </a>
            <p class="lb-description">
              Quick insights into the pieces and palettes dominating this
              season—and what to skip.
            </p>
            <a class="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
        {/* <!-- End Card 1 --> */}
        {/* <!--start Card 2 --> */}
        <article class="lb-card">
          <a class="lb-thumb" href="#">
            <img
              class="lb-img"
              src="assets/images/Lb-3.jpg"
              alt="men's Fashion Trends"
            />
          </a>
          <div class="lb-body">
            <div class="lb-meta">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="2024-08-01">August 01, 2024</time>
            </div>
            <a class="lb-heading" href="#">
              A Glimpse into Men's Fashion Trends: What's Hot and What's Not
            </a>
            <p class="lb-description">
              From relaxed tailoring to heritage textures—how to style them
              without overdoing it.
            </p>
            <a class="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
        {/* <!--End Card 2 --> */}
        {/* <!--Start Card 3 --> */}
        <article class="lb-card">
          <a class="lb-thumb" href="#">
            <img
              class="lb-img"
              src="assets/images/Lb-2.jpg"
              alt="women's Fashion Trends"
            />
          </a>
          <div class="lb-body">
            <div class="lb-meta">
              <i class="fa-regular fa-calendar"></i>
              <time datetime="2024-08-01">August 01, 2024</time>
            </div>
            <a class="lb-heading" href="#">
              Fashion Do’s and Don’ts Every Woman Should Know
            </a>
            <p class="lb-description">
              Simple rules to build outfits that always work—across seasons and
              occasions.
            </p>
            <a class="lb-read" href="#">
              Read More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
