export default function Hero() {
  return (
    <section
      className="w-full min-h-[520px] md:h-[600px] bg-no-repeat bg-cover bg-center md:bg-right flex items-center"
      style={{
        backgroundImage: "url('/heroImage.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-0">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Biometric Attendance Management Made Easy
          </h1>

          <p className="mt-4 md:mt-6 mr-20 text-gray-600 text-base md:text-lg">
            Manage attendance, events, exams, and classes with facial
            recognition and fingerprint authentication powered by wowidenti.
          </p>

          <button className="mt-6 md:mt-8 bg-[#3c83d3] hover:bg-[#243a55] cursor-pointer text-white px-6 py-3 rounded-xl transition">
            Get Started
          </button>
        </div>

        {/* Spacer for background image alignment */}
        <div className="hidden md:block h-[400px]" />
      </div>
    </section>
  );
}
