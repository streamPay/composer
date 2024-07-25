import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>
          Hello, Banyan.
        </p>
        <button 
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
          onClick={() => {
            window.parent.postMessage({
              type: "createCast",
              data: {
                cast: {
                  text: "Share Trades",
                  embeds: ["https://farcaster.banyan.social"]
                }
              }
            }, "*");
          }}
        >
          Share
        </button>
      </div>
    </main>
  );
}
