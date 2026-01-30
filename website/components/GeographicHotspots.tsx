"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import { lighthousePincodesData } from "@/lib/data";

const tierColors = {
  Elite: "#EF4444",
  High: "#F97316",
  Medium: "#10B981",
};

export default function GeographicHotspots() {
  // Get top 12 for display
  const displayPincodes = lighthousePincodesData.slice(0, 12);

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
            Geographic Hotspots
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            347 "Lighthouse" pincodes drive 40% of all Aadhaar activity—revealing concentration patterns
          </p>
        </motion.div>

        {/* Hotspot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayPincodes.map((pincode, index) => {
            const tierColor = tierColors[pincode.tier as keyof typeof tierColors];
            
            return (
              <motion.div
                key={pincode.pincode}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-l-4"
                style={{ borderLeftColor: tierColor }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5" style={{ color: tierColor }} />
                      <span className="font-mono font-bold text-lg text-neutral-900">
                        {pincode.pincode}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {pincode.city}, {pincode.state}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: tierColor }}
                  >
                    {pincode.tier}
                  </span>
                </div>
                
                <div className="flex items-end gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="font-mono text-2xl font-bold text-primary">
                    {pincode.volume.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Total Transactions</p>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-danger to-danger/80 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">347</div>
            <div className="text-sm opacity-90">Lighthouse Pincodes</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">40%</div>
            <div className="text-sm opacity-90">Of Total Activity</div>
          </div>
          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">15K+</div>
            <div className="text-sm opacity-90">Total Pincodes Analyzed</div>
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto bg-secondary/10 rounded-xl p-6"
        >
          <h4 className="font-bold text-lg text-secondary mb-3">Strategic Implications:</h4>
          <ul className="space-y-2 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span><strong>Urban Concentration:</strong> Top metros (Mumbai, Bangalore, Chennai) dominate activity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span><strong>Expansion Opportunity:</strong> Replicate "lighthouse" model in tier-2/3 cities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary font-bold">•</span>
              <span><strong>Resource Allocation:</strong> Focus infrastructure on high-volume pincodes</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
