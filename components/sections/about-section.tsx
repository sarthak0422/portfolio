"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROJECTS } from "@/lib/constants";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionSection id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <Image
                  src="/assets/sarthaktambde.jpg" 
                  alt="Sarthak Tambde"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Sarthak Tambde</h3>
                  <p className="text-white/80">Web Developer & Designer</p>
                </div>
              </div>

              <motion.div
                className="absolute -right-8 -bottom-8 p-6 bg-card shadow-xl rounded-xl border border-border z-10 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex space-x-4 mb-4">
                    {/* <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">5+</h4>
                      <p className="text-sm text-muted-foreground">
                        Years Experience
                      </p>  
                    </div> */}
                    <div className="text-center">
                      <h4 className="text-3xl font-bold text-primary">
                        {PROJECTS.length}+
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground mb-6"
              >
               🚀I'm a final-year IT student with a passion for creating real-world solutions using web and mobile development. Having hands-on experience with React, Flutter, and Python, I've crafted full-stack applications ranging from eCommerce sites to AI tools and secure blockchain applications. I live to solve real-world problems using technology and enjoy transforming ideas into meaningful, user-friendly apps. Connect with me and let's create together! 🌍💡
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted-foreground mb-6"
              >
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that not only look great but
                also perform exceptionally well across all devices and
                platforms.
              </motion.p>

              <Tabs defaultValue="experience" className="mt-8">
  <TabsList>
    <TabsTrigger value="experience">Experience</TabsTrigger>
    <TabsTrigger value="education">Education</TabsTrigger>
  </TabsList>
  <TabsContent value="experience" className="mt-4">
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-icon">💼</div>
        <div className="timeline-content">
          <h3 className="font-semibold text-lg">Frontend Developer</h3>
          <p className="text-muted-foreground text-sm">ABC Corp • 2023 - Present</p>
          <p>Lead frontend development for enterprise applications, focusing on performance optimization and accessibility.</p>
        </div>
      </div>
      {/* <!-- Add more experience items as needed --> */}
    </div>
  </TabsContent>
  <TabsContent value="education" className="mt-4">
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-icon">🎓</div>
        <div className="timeline-content">
          <h3 className="font-semibold text-lg">B.Tech in Information Technology</h3>
          <p className="timeline-date">Mumbai University • 2022 - 2025</p>
          <p>Specialized in Flutter Interaction and Web Technologies.</p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-icon">🎓</div>
        <div className="timeline-content">
          <h3 className="font-semibold text-lg">Diploma in Information Technology</h3>
          <p className="timeline-date">MSBTE • 2019 - 2022</p>
          <p>Specialized in Flutter Interaction and Web Technologies.</p>
        </div>
      </div>
      {/* <!-- Add more education items as needed --> */}
    </div>
  </TabsContent>
</Tabs>


              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="/files/SarthakSureshTambdeResume_U.pdf" download="Sarthak_Tambde_Resume.pdf">
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}