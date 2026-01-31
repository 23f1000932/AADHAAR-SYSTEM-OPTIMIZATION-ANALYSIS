"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { fraudAnalysisData } from "@/lib/data";

const RISK_COLORS = ["#EF4444", "#F97316", "#10B981"];

export default function FraudAnalysis() {
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
            Fraud Detection & Data Quality
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            ML-based anomaly detection reveals 45% suspicious activity with ₹100 Crore exposure
          </p>
        </motion.div>

        {/* Top Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-danger"
          >
            <AlertTriangle className="w-12 h-12 text-danger mb-3" />
            <div className="text-3xl font-bold font-mono text-danger mb-2">
              {fraudAnalysisData.suspiciousPincodes.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-neutral-600">Suspicious Pincodes (45%)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-accent"
          >
            <CheckCircle className="w-12 h-12 text-accent mb-3" />
            <div className="text-3xl font-bold font-mono text-accent mb-2">
              {fraudAnalysisData.normalPincodes.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-neutral-600">Normal Pincodes (55%)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-secondary"
          >
            <Shield className="w-12 h-12 text-secondary mb-3" />
            <div className="text-3xl font-bold font-mono text-secondary mb-2">
              ₹{(fraudAnalysisData.estimatedLoss / 10000000).toFixed(0)} Cr
            </div>
            <div className="text-sm text-neutral-600">Potential Fraud Exposure</div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Fraud Patterns Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Detected Fraud Patterns
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fraudAnalysisData.fraudPatterns} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="pattern" type="category" width={150} style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Risk Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Risk Level Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fraudAnalysisData.distributionByRisk}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.risk}: ${entry.percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {fraudAnalysisData.distributionByRisk.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={RISK_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => value.toLocaleString('en-US')}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-danger/10 rounded-xl p-6"
        >
          <h4 className="font-bold text-lg text-danger mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Critical Actions Required:
          </h4>
          <ul className="space-y-2 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-danger font-bold">•</span>
              <span><strong>Deploy ML Fraud Detection:</strong> ₹15 Cr investment can prevent ₹100 Cr+ losses (13X ROI)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-danger font-bold">•</span>
              <span><strong>Real-time Monitoring:</strong> Flag duplicate enrollments and geographic anomalies instantly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-danger font-bold">•</span>
              <span><strong>Data Quality Audit:</strong> Prioritize high-risk pincodes (2,025 flagged as critical)</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
