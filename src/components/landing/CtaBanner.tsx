import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-teal py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-white mb-4">
          Ready to Save on Your Dental Care?
        </h2>

        <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
          Get a free, no-obligation quote in 24 hours
        </p>

        <Link
          href="/inquiry"
          className="inline-block bg-coral text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get Your Free Quote Now
        </Link>
      </div>
    </section>
  );
}
