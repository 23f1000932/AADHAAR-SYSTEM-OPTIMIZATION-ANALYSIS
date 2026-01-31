"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Users, MapPin } from "lucide-react";
import { serviceTypeData, ruralUrbanData, roiComparisonData, bottomStatesData } from "@/lib/data";

const TIER_COLORS = {
    "Tier 1": "#EF4444",
    "Tier 2": "#F97316",
    "Tier 3": "#10B981",
};

export default function AdditionalInsights() {
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
                        Deep Dive Analytics
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Comprehensive insights into service patterns, geographic disparities, and investment returns
                    </p>
                </motion.div>

                {/* Service Type Distribution & Rural-Urban Gap */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                    {/* Service Type Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-50 rounded-2xl p-8 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Service Type Distribution
                            </h3>
                        </div>
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <Pie
                                    data={serviceTypeData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry: any) => `${entry.type.replace(" Updates", "")}: ${entry.percentage}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="count"
                                >
                                    {serviceTypeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
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
                        <p className="text-center text-neutral-600 mt-4 text-sm">
                            <span className="text-accent font-bold">Biometric updates dominate</span> at 47% of total transactions
                        </p>
                    </motion.div>

                    {/* Rural vs Urban Gap */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-50 rounded-2xl p-8 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-8 h-8 text-danger" />
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Rural-Urban Access Gap
                            </h3>
                        </div>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={ruralUrbanData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Legend />
                                <Bar dataKey="access" name="Access Rate %" radius={[8, 8, 0, 0]}>
                                    {ruralUrbanData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                                <Bar dataKey="population" name="Population %" fill="#64748B" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        <p className="text-center text-neutral-600 mt-4 text-sm">
                            <span className="text-danger font-bold">77X disparity</span> - Rural areas have 23% access despite 38% population
                        </p>
                    </motion.div>
                </div>

                {/* ROI Comparison Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-neutral-50 rounded-2xl p-8 shadow-lg max-w-6xl mx-auto mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-8 h-8 text-accent" />
                        <h3 className="text-2xl font-bold text-neutral-900">
                            ROI Comparison - All 6 Recommendations
                        </h3>
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={roiComparisonData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" label={{ value: "ROI Multiple (X)", position: "insideBottom", offset: -5 }} />
                            <YAxis dataKey="recommendation" type="category" width={150} style={{ fontSize: "12px" }} />
                            <Tooltip
                                formatter={(value: any) => `${value}X`}
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                }}
                            />
                            <Legend />
                            <Bar dataKey="roi" name="Return on Investment" radius={[0, 8, 8, 0]}>
                                {roiComparisonData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={TIER_COLORS[entry.tier as keyof typeof TIER_COLORS]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-3 bg-danger/10 rounded-lg">
                            <div className="text-sm text-danger font-semibold">TIER 1 (0-30 days)</div>
                            <div className="text-2xl font-bold text-danger">40-145X</div>
                            <div className="text-xs text-neutral-600">Quick wins, massive ROI</div>
                        </div>
                        <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-sm text-secondary font-semibold">TIER 2 (30-90 days)</div>
                            <div className="text-2xl font-bold text-secondary">8-13X</div>
                            <div className="text-xs text-neutral-600">High impact, solid returns</div>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded-lg">
                            <div className="text-sm text-accent font-semibold">TIER 3 (90-365 days)</div>
                            <div className="text-2xl font-bold text-accent">5-6X</div>
                            <div className="text-xs text-neutral-600">Strategic, transformative</div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom 10 States */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-neutral-50 rounded-2xl p-8 shadow-lg max-w-6xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                        Bottom 10 States - Expansion Opportunity
                    </h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={bottomStatesData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="state" type="category" width={130} style={{ fontSize: "12px" }} />
                            <Tooltip
                                formatter={(value: any) => value.toLocaleString('en-US')}
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                }}
                            />
                            <Legend />
                            <Bar dataKey="enrollment" fill="#EF4444" name="Enrollment" />
                            <Bar dataKey="biometric" fill="#F97316" name="Biometric" />
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-6 bg-secondary/10 rounded-xl p-6">
                        <h4 className="font-bold text-lg text-secondary mb-3">Expansion Strategy:</h4>
                        <ul className="space-y-2 text-neutral-700">
                            <li className="flex items-start gap-2">
                                <span className="text-secondary font-bold">•</span>
                                <span><strong>Northeast Focus:</strong> Nagaland model proven successful - replicate to Mizoram, Arunachal Pradesh</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary font-bold">•</span>
                                <span><strong>Mobile Units:</strong> Deploy to remote regions with ₹50 Cr Digital Inclusion Program</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary font-bold">•</span>
                                <span><strong>High ROI:</strong> Low base = massive growth potential with minimal investment</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
