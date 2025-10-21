export default function ShopPerks() {
  return (
    <section class="shop-perks">
      <div class="container">
        <ul class="perks-grid">
          <li class="perk">
            <span class="perk-icon" aria-hidden="true">
              <i class="fa-solid fa-truck-fast"></i>
            </span>
            <div class="perk-text">
              <h3>Free Shipping</h3>
              <p>
                On orders over <strong>$99</strong>.
              </p>
            </div>
          </li>
          <li class="perk">
            <span class="perk-icon" aria-hidden="true">
              <i class="fa-solid fa-sack-dollar"></i>
            </span>
            <div class="perk-text">
              <h3>Money Back</h3>
              <p>Money back in 15 days.</p>
            </div>
          </li>
          <li class="perk">
            <span class="perk-icon" aria-hidden="true">
              <i class="fa-solid fa-credit-card"></i>
            </span>
            <div class="perk-text">
              <h3>Secure Checkout</h3>
              <p>100% payment secure.</p>
            </div>
          </li>
          <li class="perk">
            <span class="perk-icon" aria-hidden="true">
              <i class="fa-solid fa-headset"></i>
            </span>
            <div class="perk-text">
              <h3>Online Support</h3>
              <p>Ensure the product quality.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
