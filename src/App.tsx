import React from "react";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav-bar">
        <ul>
          <li><strong>🐖 Porkelon Token</strong></li>
        </ul>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#buy" className="buy-btn">Buy $PORK</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-text">
          <h1>Porkelon Token: Grow Your Wealth,<br /> One Oink at a Time!</h1>
          <p>Community driven • Secure & audited • Passive rewards</p>
        </div>
        <div className="hero-img">
          <img
            src="https://img.icons8.com/color/240/000000/pig--v1.png"
            alt="Pig Mascot"
          />
        </div>
      </header>

      {/* Features */}
      <section className="features">
        <div className="grid">
          <article>
            <img src="https://img.icons8.com/fluency/96/pig.png" alt="Community Driven" />
            <h3>Community Driven</h3>
            <p>Built by the people, for the people.</p>
          </article>
          <article>
            <img src="https://img.icons8.com/fluency/96/shield.png" alt="Secure & Audited" />
            <h3>Secure & Audited</h3>
            <p>Backed by trusted blockchain security audits.</p>
          </article>
          <article>
            <img src="https://img.icons8.com/fluency/96/money-bag.png" alt="Passive Rewards" />
            <h3>Passive Rewards</h3>
            <p>Earn rewards just by holding $PORK.</p>
          </article>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="tokenomics-section">
        <h2>📊 Tokenomics</h2>
        <div className="grid tokenomics">
          <article>
            <img
              src="https://images.unsplash.com/photo-1629916977910-13213fae2498?auto=format&fit=crop&w=600&q=80"
              alt="Tokenomics Chart"
              className="chart-img"
            />
          </article>
          <article>
            <ul>
              <li>🔥 50% Burned</li>
              <li>🌍 30% Community/Marketing</li>
              <li>💧 10% Liquidity Pool</li>
              <li>👨‍💻 10% Team/Dev (locked 12 months)</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="community">
        <h2>🌍 Join the Community</h2>
        <p>
          Connect with us on:
          <a href="https://twitter.com/porkelon" target="_blank">Twitter</a>,{" "}
          <a href="https://t.me/porkelon" target="_blank">Telegram</a>,{" "}
          <a href="https://discord.gg/porkelon" target="_blank">Discord</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <small>
          © 2025 Porkelon Token ($PORK). All rights reserved. •{" "}
          <a href="https://solana.com" target="_blank">Powered by Solana</a>
        </small>
      </footer>
    </>
  );
}

export default App;
