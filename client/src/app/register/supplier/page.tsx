export const metadata = {
  title: "Register as Supplier | XMB",
  description: "Supplier registration – basic services coming soon.",
};

export default function SupplierRegisterPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-2xl text-center">
        <div className="inline-block px-5 py-2 rounded-full bg-brand-light/40 mb-6">
          <span className="text-brand-primary font-semibold text-sm tracking-wide">
            For Partners
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Register as Supplier
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Supplier onboarding is on the way. We are working to bring a smooth
          registration flow. Basic service is coming soon.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-semibold hover:opacity-90 transition"
        >
          Contact Us
          <span aria-hidden>→</span>
        </a>
      </div>
    </main>
  );
}


