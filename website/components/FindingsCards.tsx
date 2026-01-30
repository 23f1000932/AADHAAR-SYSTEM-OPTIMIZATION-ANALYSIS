"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const findings = [
  {
    id: 1,
    title: "Tuesday Crisis",
    frontMetric: "22.8M Updates",
    frontBadge: "6X Overload",
    backTitle: "Impact Breakdown",
    backContent: [
      "₹20 Cr annual infrastructure waste",
      "Server capacity maxed out on Tuesdays",
      "Poor citizen experience with delays",
      "Underutilization on other weekdays",
    ],
    color: "danger",
  },
  {
    id: 2,
    title: "Silent Dropout",
    frontMetric: "47% Dropout Rate",
    frontBadge: "2.5M Dormant",
    backTitle: "Wasted Investment",
    backContent: [
      "₹250 Cr in dormant enrollments",
      "5.3M enrolled → 2.8M active",
      "Highest dropout in rural states",
      "Massive reactivation opportunity",
    ],
    color: "danger",
  },
  {
    id: 3,
    title: "Lighthouse Effect",
    frontMetric: "347 Pincodes",
    frontBadge: "40% Activity",
    backTitle: "Network Opportunity",
    backContent: [
      "High-performing hubs identified",
      "5M+ citizens in catchment areas",
      "Blueprint for expansion strategy",
      "Proven engagement model",
    ],
    color: "secondary",
  },
  {
    id: 4,
    title: "Fraud Signals",
    frontMetric: "45% Suspicious",
    frontBadge: "₹100 Cr Exposure",
    backTitle: "Detection Needs",
    backContent: [
      "Abnormal pincode patterns detected",
      "Duplicate/inconsistent data",
      "Geographic anomalies",
      "Requires ML-based monitoring",
    ],
    color: "danger",
  },
  {
    id: 5,
    title: "Equity Gap",
    frontMetric: "77X Rural Gap",
    frontBadge: "2.5M Excluded",
    backTitle: "Geographic Disparities",
    backContent: [
      "Remote states severely underserved",
      "Urban concentration extreme",
      "Mobile enrollment critical",
      "Nagaland model success story",
    ],
    color: "secondary",
  },
];

function FindingCard({ finding }: { finding: typeof findings[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const colorClasses = {
    danger: "from-danger to-danger-dark",
    secondary: "from-secondary to-secondary-dark",
    accent: "from-accent to-accent-dark",
  };

  return (
    <div
      className="perspective-1000 h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rounded-2xl p-8 flex flex-col justify-between cursor-pointer",
            `bg-gradient-to-br ${colorClasses[finding.color as keyof typeof colorClasses]}`
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {finding.title}
            </h3>
            <div className="text-5xl font-bold text-white font-mono mb-3">
              {finding.frontMetric}
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg inline-block self-start">
            <span className="text-white font-semibold">{finding.frontBadge}</span>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rounded-2xl p-8 bg-neutral-800 border-2 cursor-pointer",
            finding.color === "danger" && "border-danger",
            finding.color === "secondary" && "border-secondary",
            finding.color === "accent" && "border-accent"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-xl font-bold text-white mb-4">
            {finding.backTitle}
          </h4>
          <ul className="space-y-3">
            {finding.backContent.map((item, idx) => (
              <li key={idx} className="flex items-start text-neutral-300">
                <span className="text-secondary mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function FindingsCards() {
  return (
    <section className="py-20 bg-neutral-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Findings
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Five critical insights from analyzing 110M+ transactions
            <br />
            <span className="text-sm text-neutral-400 mt-2 block">
              (Hover or tap to reveal details)
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {findings.map((finding, index) => (
            <motion.div
              key={finding.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <FindingCard finding={finding} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
