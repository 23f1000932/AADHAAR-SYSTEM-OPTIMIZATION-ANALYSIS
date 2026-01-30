"use client";

import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dive Deeper Into Our Analysis
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Download the complete 15-page report with detailed findings, 37 data
            visualizations, and implementation roadmap
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/report.pdf"
              download
              className="px-10 py-5 bg-white text-primary font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 flex items-center gap-3 text-lg"
            >
              <Download className="w-6 h-6" />
              Download Full Report (PDF)
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/20 flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-white/20">
            <p className="text-white/70 mb-4">
              © 2026 IIT Madras Data Science Team
            </p>
            <p className="text-white/60 mb-6">
              Built for Government of India Digital Infrastructure Hackathon
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
