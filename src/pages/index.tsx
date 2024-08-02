import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { fid } = router.query;
  console.log(fid)

  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  useEffect(() => {
    if (fid) {
      console.log('FID:', fid);
    }
  }, [fid]);

  const handleFlavorChange = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== flavor));
    } else if (selectedFlavors.length < 3) {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const flavors = [
    "Chocolate", "Vanilla", "Strawberry", "Mint Chocolate Chip",
    "Cookies and Cream", "Rocky Road", "Butter Pecan", "Coffee",
    "Pistachio", "Salted Caramel"
  ];

  const handleShare = () => {
    const [first, second, third] = selectedFlavors;
    const castText = `My favorite ice cream flavors🍦 are: ${first}, ${second}, ${third} and I love being able to use Cast Composer Actions built by dTech for my business!`;
    window.parent.postMessage({
      type: "createCast",
      data: {
        cast: {
          text: castText,
          embeds: ["https://dtech.vision"]
        }
      }
    }, "*");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* ... (previous code remains unchanged) */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="col-span-4 flex justify-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <p className="mb-4 font-bold text-lg">Select your three favorite ice cream flavors:</p>
            {flavors.map((flavor, index) => (
              <div key={index} className="mb-2">
                <input
                  type="checkbox"
                  id={`flavor${index + 1}`}
                  name={`flavor${index + 1}`}
                  value={flavor}
                  checked={selectedFlavors.includes(flavor)}
                  onChange={() => handleFlavorChange(flavor)}
                  className="mr-2"
                />
                <label htmlFor={`flavor${index + 1}`}>{flavor}</label>
              </div>
            ))}
            <p className="mt-4 text-sm text-gray-600">
              Selected: {selectedFlavors.length}/3
            </p>
          </form>
        </div>
        <div className="col-span-4 flex justify-center">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            onClick={handleShare}
            disabled={selectedFlavors.length !== 3}
          >
            {fid}
          </button>
        </div>
      </div>
    </main>
  );
}
