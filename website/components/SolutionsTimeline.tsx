"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    tier: "TIER 1 (0-30 days) - CRITICAL",
    tierColor: "danger",
    items: [
      {
        id: "REC-001",
        title: "Tuesday Load Redistribution",
        description:
          "Dynamic scheduling system with gamified incentives to redistribute biometric updates across weekdays",
        investment: "₹0.5 Cr",
        roi: "40X ROI",
        impact: "80% Tuesday load reduction, ₹20 Cr savings",
      },
      {
        id: "REC-002",
        title: "Dormant User Reactivation",
        description:
          "SMS/WhatsApp campaign with digital assistants to reactivate 2.5M dormant enrollments",
        investment: "₹1.25 Cr",
        roi: "145X ROI",
        impact: "1.5M reactivations, ₹180 Cr value unlock",
      },
    ],
  },
  {
    tier: "TIER 2 (30-90 days) - HIGH",
    tierColor: "secondary",
    items: [
      {
        id: "REC-003",
        title: "ML-Based Fraud Detection",
        description:
          "Real-time anomaly detection system for 45% suspicious pincodes using machine learning",
        investment: "₹8 Cr",
        roi: "13X ROI",
        impact: "₹100 Cr fraud prevention, data integrity",
      },
      {
        id: "REC-004",
        title: "Lighthouse Center Expansion",
        description:
          "Replicate success of 347 high-performing centers to underserved regions",
        investment: "₹15 Cr",
        roi: "8X ROI",
        impact: "5M+ new citizens reached, network effect",
      },
    ],
  },
  {
    tier: "TIER 3 (90-365 days) - STRATEGIC",
    tierColor: "accent",
    items: [
      {
        id: "REC-005",
        title: "Digital Inclusion Program",
        description:
          "Mobile enrollment units and digital literacy campaigns for remote 2.5M citizens",
        investment: "₹50 Cr",
        roi: "5X ROI",
        impact: "Universal coverage, 77X gap elimination",
      },
      {
        id: "REC-006",
        title: "Nagaland Model Replication",
        description:
          "Scale Nagaland's successful engagement model to other low-performing states",
        investment: "₹25 Cr",
        roi: "6X ROI",
        impact: "State-level transformation blueprint",
      },
    ],
  },
];

function SolutionCard({ solution, color }: { solution: any; color: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorMap = {
    danger: "bg-danger/10 border-danger hover:border-danger/70",
    secondary: "bg-secondary/10 border-secondary hover:border-secondary/70",
    accent: "bg-accent/10 border-accent hover:border-accent/70",
  };

  const badgeColorMap = {
    danger: "bg-danger text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
  };

  return (
    <div
      className={cn(
        "border-2 rounded-xl p-6 transition-all duration-300",
        colorMap[color as keyof typeof colorMap]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div
            className={cn(
              "inline-block px-3 py-1 rounded-full text-sm font-bold mb-3",
              badgeColorMap[color as keyof typeof badgeColorMap]
            )}
          >
            {solution.id}
          </div>
          <h4 className="text-xl font-bold text-neutral-900 mb-2">
            {solution.title}
          </h4>
          <p className="text-neutral-600 mb-4">{solution.description}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 p-2 hover:bg-neutral-200 rounded-lg transition-colors"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-neutral-500">Investment</div>
          <div className="text-lg font-bold text-neutral-900 font-mono">
            {solution.investment}
          </div>
        </div>
        <div>
          <div className="text-sm text-neutral-500">Expected ROI</div>
          <div className="text-lg font-bold text-accent font-mono">
            {solution.roi}
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pt-4 border-t border-neutral-300"
        >
          <div className="text-sm text-neutral-500 mb-1">Expected Impact</div>
          <div className="text-neutral-900">{solution.impact}</div>
        </motion.div>
      )}
    </div>
  );
}

export default function SolutionsTimeline() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Solutions Roadmap
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            6 strategic recommendations prioritized by urgency and impact
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {solutions.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.15, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span
                  className={cn(
                    "w-3 h-3 rounded-full mr-3",
                    tier.tierColor === "danger" && "bg-danger",
                    tier.tierColor === "secondary" && "bg-secondary",
                    tier.tierColor === "accent" && "bg-accent"
                  )}
                ></span>
                {tier.tier}
              </h3>

              <div className="space-y-4">
                {tier.items.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    color={tier.tierColor}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-2xl mx-auto bg-primary text-white rounded-2xl p-8 text-center shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Total Investment Required</h3>
          <div className="text-6xl font-bold mb-2 font-mono">₹99.25 Cr</div>
          <p className="text-primary-light">
            Expected aggregate return:{" "}
            <span className="font-bold text-accent">₹800 Cr+</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
