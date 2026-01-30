"use client";

import { motion } from "framer-motion";
import { IndianRupee, UserX, Server, Map, ShieldAlert } from "lucide-react";

const problems = [
  {
    title: "₹370 Crore Annual Waste",
    description: "Massive inefficiency in system operations",
    Icon: IndianRupee,
  },
  {
    title: "47% Enrollment Dropout",
    description: "Nearly half of enrollments become dormant",
    Icon: UserX,
  },
  {
    title: "6X Tuesday Server Overload",
    description: "Severe concentration on specific weekdays",
    Icon: Server,
  },
  {
    title: "2.5M Underserved Citizens",
    description: "Geographic access disparities",
    Icon: Map,
  },
  {
    title: "₹100 Cr Fraud Exposure",
    description: "Suspicious activity patterns detected",
    Icon: ShieldAlert,
  },
];

export default function ProblemStatement() {
  return (
    <section id="problem-statement" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Challenge
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            India&apos;s Aadhaar system processes over 110 million transactions, yet
            faces critical inefficiencies costing ₹370 Crore annually. Our analysis
            of biometric, demographic, and enrollment data reveals five systemic
            failures demanding immediate intervention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-danger/10 border-2 border-danger/30 rounded-xl p-6 hover:border-danger/50 transition-all duration-300 group"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4"
              >
                <problem.Icon className="w-12 h-12 text-danger group-hover:text-danger-light transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-neutral-300">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
