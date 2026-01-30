"use client";

import { motion } from "framer-motion";
import { Database, AlertTriangle, Lightbulb, Users } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap = {
  database: Database,
  "alert-triangle": AlertTriangle,
  lightbulb: Lightbulb,
  users: Users,
};

interface HeroMetric {
  label: string;
  value: string;
  icon: keyof typeof iconMap;
}

const metrics: HeroMetric[] = [
  { label: "Transactions Analyzed", value: "110M+", icon: "database" },
  { label: "Critical Failures", value: "5", icon: "alert-triangle" },
  { label: "Strategic Solutions", value: "6", icon: "lightbulb" },
  { label: "Citizens Impacted", value: "12M+", icon: "users" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToInsights = () => {
    document.getElementById("problem-statement")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Optimizing India&apos;s
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Digital Identity Infrastructure
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data-driven analysis revealing{" "}
            <span className="font-bold text-danger">₹370 Crore inefficiencies</span>{" "}
            and roadmap to{" "}
            <span className="font-bold text-accent">8-10X ROI</span>
          </motion.p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {metrics.map((metric, index) => {
              const Icon = iconMap[metric.icon];
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-10 h-10 text-secondary mb-3 mx-auto" />
                  <div className="text-4xl font-bold text-white mb-2 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/80">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="/report.pdf"
              download
              className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View Full Report (PDF)
            </a>
            <button
              onClick={scrollToInsights}
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105"
            >
              Explore Insights ↓
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
