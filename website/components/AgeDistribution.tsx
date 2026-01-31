"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ageDistributionData } from "@/lib/data";

const COLORS = ["#EF4444", "#F97316", "#10B981"];

export default function AgeDistribution() {
  // Transform data for pie charts
  const enrollmentPieData = ageDistributionData.map((item) => ({
    name: item.ageGroup,
    value: item.enrollment,
  }));

  const biometricPieData = ageDistributionData.map((item) => ({
    name: item.ageGroup,
    value: item.biometric,
  })).filter(item => item.value > 0);

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
            Demographic Distribution
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Age group analysis reveals enrollment patterns and digital adoption across demographics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Enrollment Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Enrollment by Age Group
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={enrollmentPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.name.replace("Age ", "")}: ${(entry.percent * 100).toFixed(0)}%`}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {enrollmentPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => value.toLocaleString()}
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

          {/* Biometric Updates Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Biometric Updates by Age
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={biometricPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.name.replace("Age ", "")}: ${(entry.percent * 100).toFixed(0)}%`}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                  innerRadius={60}
                >
                  {biometricPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index + 1 % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => value.toLocaleString()}
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

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto bg-primary/10 rounded-xl p-6"
        >
          <h4 className="font-bold text-lg text-primary mb-3">Key Insights:</h4>
          <ul className="space-y-2 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>74% of enrollments</strong> are from Age 18+ segment, showing adult digital adoption</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>17% enrollment</strong> from Age 5-17 indicates strong youth engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Age 0-5 segment</strong> has minimal biometric updates (not eligible), focused on enrollment only</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
