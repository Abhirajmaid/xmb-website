export default function CTASection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl max-w-8xl mx-auto px-10 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Get a Quote Now
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Ready to transform your manufacturing processes? Connect with
                our experts to discuss your project requirements and get a
                customized solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors">
                GET QUOTE NOW
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:text-blue-600 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gray-300 rounded-3xl h-[400px] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Business professionals collaborating"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
