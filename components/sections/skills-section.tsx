"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { MotionSection } from "@/components/ui/motion-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  progressRefs.current = [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const filterSkills = (category: string) => {
    return SKILLS.filter((skill) => skill.category === category);
  };

  const categories = ["frontend", "backend", "design", "tools", "ai", "devops"];

  return (
    <MotionSection id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground">
            I specialize in building modern web applications with a focus on
            performance, accessibility, and user experience.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-6 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {filterSkills(category).map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md shadow-sm"
                      ref={(el) => (progressRefs.current[index] = el)}
                    >
                      <Icon className="h-9 w-9 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Development Approach
            </h3>
            <ul className="space-y-3">
              {[
                {
                  title: "Component-Based",
                  description:
                    "Building modular, reusable components for efficiency",
                },
                {
                  title: "Responsive First",
                  description:
                    "Designing for all devices from the beginning",
                },
                {
                  title: "Accessible",
                  description:
                    "Following WCAG guidelines for inclusive web experiences",
                },
              ].map((item, idx) => (
                <li className="flex" key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="bg-primary/10 dark:bg-primary/20 rounded-full p-1 mr-3 mt-0.5"
                  >
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </motion.div>
                  <span>
                    <strong className="font-medium">{item.title}:</strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Tools I Use</h3>
            <ul className="space-y-3">
              {[
                {
                  title: "Design",
                  tools: "Figma, Canva",
                },
                {
                  title: "Development",
                  tools: "VS Code, Git, GitHub, Terminal",
                },
                {
                  title: "Testing",
                  tools: "Jest, Cypress, React Testing Library",
                },
              ].map((item, idx) => (
                <li className="flex" key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="bg-accent/10 dark:bg-accent/20 rounded-full p-1 mr-3 mt-0.5"
                  >
                    <svg
                      className="h-4 w-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </motion.div>
                  <span>
                    <strong className="font-medium">{item.title}:</strong>{" "}
                    {item.tools}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </MotionSection>
  );
}
