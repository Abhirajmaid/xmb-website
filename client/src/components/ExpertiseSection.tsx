export default function ExpertiseSection() {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 uppercase tracking-wide text-sm font-medium mb-6">
            XMB EXPERTISE
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Discover our commitment to excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            With over a decade of experience, we deliver tailored manufacturing
            solutions that empower your business to grow. By understanding your
            unique challenges, our team provides strategic insights to ensure
            your success through collaboration and innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Manufacturing Solutions Card */}
          <div className="bg-orange-100 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  Open / Invite-priority
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Manufacturing Solutions
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Build teams of highly motivated manufacturing professionals
                across the globe, with projects across all industries.
              </p>

              <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors">
                Start consultation →
              </button>
            </div>

            {/* Abstract Background Shape */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-orange-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-8 right-4 w-24 h-24 bg-orange-400 rounded-full opacity-40"></div>
          </div>

          {/* Quality Assurance Card */}
          <div className="bg-gray-200 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  Open for applications
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Work on your own terms in a motivating and healthy environment.
                You will earn XMB- tokens too!
              </p>

              <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors">
                Apply now →
              </button>
            </div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-4 right-8 w-20 h-20 bg-gray-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-gray-500 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-600 rounded-full opacity-40"></div>
          </div>

          {/* Process Optimization Card */}
          <div className="bg-purple-100 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  Invite only
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Process Optimization
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                As a specialist you will utilize your network to refer new
                members and companies to earn ownership in form of XMB-tokens.
              </p>

              <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors">
                Request invite →
              </button>
            </div>

            {/* Abstract Background Shape */}
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-purple-300 rounded-full opacity-50"></div>
          </div>

          {/* Partnership Program Card */}
          <div className="bg-green-100 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  Invite only
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Partnerships
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                As a partner you can offer direct access to the XMB ecosystem to
                your portfolio companies, community or customers.
              </p>

              <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-700 transition-colors">
                Get in touch →
              </button>
            </div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-8 right-4 w-28 h-28 bg-green-300 rounded-lg opacity-60"></div>
            <div className="absolute bottom-4 right-8 w-20 h-20 bg-green-400 rounded-lg opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
