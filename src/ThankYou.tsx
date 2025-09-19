import React from "react";

function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-amber-400">🎉 Thank You!</h1>
        <p className="text-lg text-gray-300">
          Your submission was successful. Check your email for more details.
        </p>
        <a 
          href="/" 
          className="mt-6 inline-block bg-amber-500 text-black px-6 py-3 rounded-xl hover:bg-amber-600"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
