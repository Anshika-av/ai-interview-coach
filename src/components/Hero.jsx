import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Sparkles size={40} className="text-purple-600" />
      </div>

      <h1 className="text-6xl font-bold mb-4">
        AI Interview <span className="text-purple-600">Coach</span>
      </h1>

      <p className="text-gray-500 text-xl mb-6">
        Practice smarter. Get better. Land your dream job.
      </p>

      <div className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-medium">
        ✨ AI-generated questions & instant feedback
      </div>
    </div>
  );
}

export default Hero;