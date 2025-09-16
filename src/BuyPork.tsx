import React, { useEffect } from "react";

export default function BuyPork() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-2xl font-bold text-lg shadow-lg"
        onClick={() =>
          // @ts-ignore Jupiter global init
          window.Jupiter.init({
            displayMode: "modal",
            endpoint: "https://api.mainnet-beta.solana.com",
            defaultInputMint:
              "So11111111111111111111111111111111111111112", // SOL
            defaultOutputMint:
              "38wY9xCwHK1ui7p7Y1kDAE7cwCSmTVJy7RSGsk2gmoon", // $PORK
            defaultSlippageBps: 100,
          })
        }
      >
        🚀 Buy $PORK Now
      </button>

      <a
        href="https://jup.ag/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=38wY9xCwHK1ui7p7Y1kDAE7cwCSmTVJy7RSGsk2gmoon&slippage=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-pink-400"
      >
        Or buy via Jupiter ↗
      </a>
    </div>
  );
}
