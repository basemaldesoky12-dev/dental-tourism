"use client";

import Link from "next/link";
import { FileText, FileCheck, CreditCard, Plane } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Tell Us What You Need",
    description:
      "Fill out a quick form with your dental needs and any X-rays or photos you have.",
  },
  {
    number: 2,
    icon: FileCheck,
    title: "Receive Your Custom Quote",
    description:
      "Our dental team reviews your case and sends a detailed, transparent quote within 24 hours.",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Approve & Pay",
    description:
      "Once you're happy with your plan, secure your spot with a simple deposit. No hidden fees.",
  },
  {
    number: 4,
    icon: Plane,
    title: "Travel & Smile",
    description:
      "We arrange flights, accommodation, and transfers. You just show up and smile.",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useInView();

  return (
    <section id="how-it-works" className="bg-sand py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-14 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            Your Journey in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative text-center ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* Connecting line (visible on md+) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] border-t-2 border-dashed transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      borderColor: "rgba(13,115,119,0.3)",
                      transitionDelay: `${400 + index * 200}ms`,
                    }}
                  />
                )}

                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold text-lg relative z-10 ${isVisible ? "animate-scale-in" : "anim-hidden"}`}
                    style={{ animationDelay: `${300 + index * 150}ms` }}
                  >
                    {step.number}
                  </div>
                </div>

                <Icon className="w-6 h-6 text-teal mx-auto mb-3" />

                <h3 className="font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-gray max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center ${isVisible ? "animate-fade-up delay-700" : "anim-hidden"}`}
        >
          <Link
            href="/inquiry"
            className="inline-block bg-coral text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
