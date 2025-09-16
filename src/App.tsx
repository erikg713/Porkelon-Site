import React from "react";
import BuyPork from "./BuyPork";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src="/porkelon-logo.png"
        alt="Porkelon Logo"
        className="w-32 h-32 mb-6 rounded-full shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mb-4">Porkelon ($PORK)</h1>
      <p className="text-xl max-w-2xl mb-6">
        The meme token blasting off on Solana 🚀🐖. Community-powered, fun-fueled,
        and built for growth.
      </p>

      <BuyPork />

      <a
        href="https://solscan.io/token/38wY9xCwHK1ui7p7Y1kDAE7cwCSmTVJy7RSGsk2gmoon"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-3 bg-gray-800 rounded-2xl font-bold text-lg hover:bg-gray-700 transition"
      >
        View on Solscan
      </a>
    </div>
  );
}
