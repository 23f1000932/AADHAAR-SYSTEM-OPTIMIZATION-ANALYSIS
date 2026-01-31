"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { tuesdayData, dropoutFunnelData, monthlyTrendsData, topStatesData, topDistrictsData } from "@/lib/data";

const tabs = [
  { id: "tuesday", label: "Tuesday Crisis" },
  { id: "dropout", label: "Dropout Funnel" },
  { id: "monthly", label: "Monthly Trends" },
  { id: "states", label: "Top States" },
  { id: "districts", label: "District Analysis" },
];

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState("tuesday");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Interactive Data Insights
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore the data patterns driving our recommendations
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chart Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 rounded-2xl p-8 shadow-xl max-w-5xl mx-auto"
        >
          {/* Tuesday Crisis */}
          {activeTab === "tuesday" && (
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Biometric Updates by Day of Week (Millions)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={tuesdayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis label={{ value: "Updates (M)", angle: -90, position: "insideLeft" }} />
                  <Tooltip
                    formatter={(value) => [`${value}M`, "Updates"]}
                    contentStyle={{
                      backgroundColor: "#1E3A8A",
                      border: "none",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  />
                  <Bar dataKey="updates" radius={[8, 8, 0, 0]}>
                    {tuesdayData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.day === "Tue" ? "#EF4444" : "#1E3A8A"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-neutral-600 mt-4">
                <span className="text-danger font-bold">Tuesday shows 6X overload</span> compared to other weekdays
              </p>
            </div>
          )}

          {/* Dropout Funnel */}
          {activeTab === "dropout" && (
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Enrollment Dropout Funnel (Millions)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dropoutFunnelData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" label={{ value: "Citizens (M)", position: "insideBottom", offset: -5 }} />
                  <YAxis dataKey="stage" type="category" width={100} />
                  <Tooltip
                    formatter={(value) => [`${value}M`, "Citizens"]}
                    contentStyle={{
                      backgroundColor: "#1E3A8A",
                      border: "none",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  />
                  <Bar dataKey="value" fill="#F97316" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-neutral-600 mt-4">
                <span className="text-danger font-bold">47% dropout rate</span> - 2.5M dormant users
              </p>
            </div>
          )}

          {/* Monthly Trends */}
          {activeTab === "monthly" && (
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Monthly Activity Trends (March - December)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: "Transactions", angle: -90, position: "insideLeft" }} />
                  <Tooltip
                    formatter={(value: any) => value.toLocaleString()}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="enrollment" stroke="#1E3A8A" strokeWidth={3} name="Enrollment" />
                  <Line type="monotone" dataKey="demographic" stroke="#F97316" strokeWidth={3} name="Demographic" />
                  <Line type="monotone" dataKey="biometric" stroke="#10B981" strokeWidth={3} name="Biometric" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-neutral-600 mt-4">
                <span className="text-accent font-bold">Consistent upward trend</span> - 106% growth from March to December
              </p>
            </div>
          )}

          {/* Top States */}
          {activeTab === "states" && (
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Top 10 States by Enrollment
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topStatesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="state" type="category" width={120} style={{ fontSize: "12px" }} />
                  <Tooltip
                    formatter={(value: any) => value.toLocaleString()}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="enrollment" fill="#1E3A8A" name="Enrollment" />
                  <Bar dataKey="biometric" fill="#10B981" name="Biometric" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-neutral-600 mt-4">
                <span className="text-primary font-bold">Maharashtra leads</span> with 8.2M+ enrollments
              </p>
            </div>
          )}

          {/* District Analysis */}
          {activeTab === "districts" && (
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Top 15 Districts by Activity
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topDistrictsData.slice(0, 10)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="district" type="category" width={180} style={{ fontSize: "11px" }} />
                  <Tooltip
                    formatter={(value: any) => value.toLocaleString()}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-neutral-600 mt-4">
                <span className="text-secondary font-bold">Urban metros dominate</span> - Mumbai, Bangalore, Chennai lead
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
