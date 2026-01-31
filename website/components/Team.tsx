"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import { Clock, Map, Search, TrendingUp, Shield } from "lucide-react";

// Type definition for team member
interface TeamMember {
  name: string;
  role: string;
  institution: string;
  avatar: string;
  specialization?: string;
  email?: string;
}

const methodologies = [
  { name: "Temporal Analysis", Icon: Clock },
  { name: "Geographic Clustering", Icon: Map },
  { name: "Anomaly Detection", Icon: Search },
  { name: "Predictive Forecasting", Icon: TrendingUp },
  { name: "ML-Based Fraud Detection", Icon: Shield },
];

const techStack = [
  "Python",
  "Pandas",
  "Scikit-learn",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Next.js",
  "React",
  "Recharts",
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Team & Methodology
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            IIT Madras Data Science Students
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {(teamMembers as TeamMember[]).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-1">{member.role}</p>
              <p className="text-sm text-neutral-600 mb-3">{member.institution}</p>
              {member.specialization && (
                <p className="text-xs text-neutral-500 italic mb-2">{member.specialization}</p>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-primary hover:underline break-all"
                >
                  {member.email}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Our Methodology
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <method.Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  {method.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
