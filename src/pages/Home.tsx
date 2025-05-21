import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-8">
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank" className="mx-2">
          <img src={viteLogo} className="logo h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="mx-2">
          <img src={reactLogo} className="logo react h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center my-6">Vite + React</h1>
      <div className="max-w-md mx-auto p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-center text-gray-300">
          Edit <code className="bg-gray-700 px-1 rounded">src/pages/Home.tsx</code> and save to test
          HMR
        </p>
      </div>
    </div>
  );
}

export default Home;
