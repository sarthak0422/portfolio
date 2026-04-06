"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { MotionSection } from "../ui/motion-section";

const certifications = [
  {
    title: "Cloud Technical Series: AI in Action Badge",
    issuer: "Google Cloud Asia Pacific",
    date: "Apr 2026",
    skills: ["Generative AI", "Vertex AI"],
    link: "https://www.credly.com/badges/7eaaea55-3b2f-4722-86cf-e4712d4501a9/linked_in_profile",
    category: "Cloud",
    color: "blue",
    verified: true,
  },
  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Kaggle & Google",
    date: "Dec 2025",
    skills: ["AI Agents", "Python"],
    link: "https://www.kaggle.com/certification/badges/sarthakstambde/105",
    category: "AI Agents",
    color: "teal",
    verified: true,
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Jan 2025",
    skills: ["LLMs", "Prompt Engineering"],
    link: "https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/bdd1c489-dcaa-4bf4-b293-8c4a8125a304_cert.pdf",
    category: "GenAI",
    color: "orange",
    verified: false,
  },

  {
    title: "ML & DL Seminar.",
    issuer: "CSI Department",
    date: "Feb 2024",
    skills: ["Machine Learning", "Deep Learning"],
    // link: "https://example.com/ml-dl-seminar",
    category: "Academic",
    color: "green",
    verified: false,
  },

  {
    title: "Ethical Hacking Bootcamp",
    issuer: "Udemy",
    date: "Aug 2021",
    skills: ["Ethical Hacking", "Penetration Testing"],
    link: "https://www.udemy.com/certificate/UC-b32e6b77-295c-43f3-89d0-4a7bccb77535/",
    category: "Cybersecurity",
    color: "red",
    verified: true,
  },
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 unless 'showAll' is true
  const displayedCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <MotionSection className="py-24 px-6 max-w-6xl mx-auto" id="certifications">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Licenses & <span className="text-blue-500">Certifications</span>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedCerts.map((cert, index) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group p-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all shadow-md dark:shadow-2xl"
            >
              {/* Verified Badge */}
              {cert.verified && (
                <div className="absolute -top-3 -right-3 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-blue-600 text-white p-1.5 rounded-full shadow-lg flex items-center gap-1 px-3"
                  >
                    <CheckCircle2 size={14} strokeWidth={3} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">
                      Verified
                    </span>
                  </motion.div>
                </div>
              )}

              {/* Category & Link */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    cert.color === "blue"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : cert.color === "teal"
                        ? "bg-teal-500/10 text-teal-600 dark:text-teal-400"
                        : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {cert.category}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {cert.issuer}
              </p>
              <p className="text-gray-400 dark:text-gray-600 text-[10px] mt-1 font-mono uppercase tracking-widest">
                {cert.date}
              </p>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-[10px] text-gray-600 dark:text-gray-400 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Toggle Button Container */}
      {certifications.length > 3 && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline" // Using shadcn outline variant for a cleaner theme look
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="group rounded-full px-8 py-6 gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                Show All Certifications ({certifications.length})
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>
      )}
    </MotionSection>
  );
};

export default Certifications;
