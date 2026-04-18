import { Star, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  procedure: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I saved over $12,000 on my dental implants and the quality was absolutely world-class. The clinic in Cairo was more modern than anything I've seen in Sydney.",
    name: "Sarah M.",
    procedure: "Dental Implants",
  },
  {
    text: "From airport pickup to the final check-up, everything was handled seamlessly. I felt safe, cared for, and came home with the smile I always wanted.",
    name: "James T.",
    procedure: "Porcelain Veneers",
  },
  {
    text: "I was nervous about dental work overseas, but the Australian team made it so easy. The dentists were highly trained and the results speak for themselves.",
    name: "Lisa K.",
    procedure: "Full Mouth Rehab",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            Real Stories From Real Patients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-light-warm rounded-xl p-6"
            >
              <Quote className="w-8 h-8 text-teal mb-4" />

              <p className="italic text-stone-gray leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-teal text-teal"
                  />
                ))}
              </div>

              <p className="font-semibold text-charcoal">
                {testimonial.name}
              </p>
              <p className="text-sm text-stone-gray">{testimonial.procedure}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
