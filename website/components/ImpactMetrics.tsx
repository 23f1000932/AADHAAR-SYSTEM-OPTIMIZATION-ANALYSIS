"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import * as React from "react";
import { Users, IndianRupee, TrendingUp, Server, UserCheck, ShieldCheck } from "lucide-react";

const iconMap = {
  users: Users,
  currency: IndianRupee,
  "trending-up": TrendingUp,
  server: Server,
  "user-check": UserCheck,
  "shield-check": ShieldCheck,
};

const metrics = [
  {
    icon: "users" as const,
    value: "12",
    suffix: "M+",
    label: "Citizens Reached",
    color: "primary",
  },
  {
    icon: "currency" as const,
    value: "800",
    suffix: " Cr",
    prefix: "₹",
    label: "Value Created",
    color: "accent",
  },
  {
    icon: "trending-up" as const,
    value: "8",
    suffix: "-10X",
    label: "Return on Investment",
    color: "secondary",
  },
  {
    icon: "server" as const,
    value: "80",
    suffix: "%",
    label: "Tuesday Load Reduction",
    color: "primary",
  },
  {
    icon: "user-check" as const,
    value: "47",
    suffix: "% → 28%",
    label: "Dropout Improvement",
    color: "accent",
  },
  {
    icon: "shield-check" as const,
    value: "100",
    suffix: " Cr",
    prefix: "₹",
    label: "Fraud Prevented",
    color: "danger",
  },
];

function Counter({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const inView = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numValue = parseInt(value);
          animate(count, numValue, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      inView.observe(ref.current);
    }

    return () => inView.disconnect();
  }, [value, count]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expected Impact
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Projected outcomes from implementing our recommendations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            const colorClasses = {
              primary: "text-primary-light",
              secondary: "text-secondary",
              accent: "text-accent",
              danger: "text-danger",
            };

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-neutral-800 rounded-2xl p-8 text-center hover:bg-neutral-700 transition-all duration-300 hover:scale-105 border border-neutral-700"
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${colorClasses[metric.color as keyof typeof colorClasses]}`} />
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </div>
                <div className="text-neutral-400">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
