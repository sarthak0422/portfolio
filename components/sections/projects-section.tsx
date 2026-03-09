"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Eye, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/ui/motion-section";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [showPhone, setShowPhone] = useState(false);
  const [phoneProjectUrl, setPhoneProjectUrl] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((project) => project.id === selectedId);

  return (
    <MotionSection
      id="projects"
      className="py-20 bg-muted/50 dark:bg-secondary/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work, showcasing my skills and expertise in
            web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden h-full group cursor-pointer border-border/60 hover:border-border transition-colors duration-300">
                <div
                  className="relative overflow-hidden aspect-video"
                  onClick={() => setSelectedId(project.id)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="mr-4">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle
                    className="cursor-pointer"
                    onClick={() => setSelectedId(project.id)}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.tags.includes("Flutter") ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1"
                      onClick={() => {
                        setPhoneProjectUrl(project.demoUrl);
                        setShowPhone(true);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                      Demo
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                      <Link href={project.demoUrl} target="_blank">
                        <Eye className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="group">
            <Link href="https://github.com/sarthak0422" target="_blank">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-card max-w-3xl w-full rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 rounded-full bg-card/80 backdrop-blur-sm"
                    onClick={() => setSelectedId(null)}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </motion.svg>
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.tags.includes("Flutter") ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPhone(true)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Demo
                      </Button>
                    ) : (
                      <Button asChild>
                        <Link href={selectedProject.demoUrl} target="_blank">
                          <Eye className="mr-2 h-4 w-4" />
                          View Demo
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link href={selectedProject.githubUrl} target="_blank">
                        <Code2 className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phone Mockup Modal */}
        <AnimatePresence>
          {showPhone && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPhone(false)}
            >
              <motion.div
                className="phone-frame bg-black relative"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={selectedProject.demoUrl}
                  frameBorder="0"
                  className="w-full h-full"
                />
                <button
                  onClick={() => setShowPhone(false)}
                  className="absolute top-2 right-2 text-white text-xl z-10"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showPhone && phoneProjectUrl && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPhone(false)}
            >
              <motion.div
                className="phone-frame bg-black relative"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={phoneProjectUrl}
                  frameBorder="0"
                  className="w-full h-full"
                />
                <button
                  onClick={() => setShowPhone(false)}
                  className="absolute top-2 right-2 text-white text-xl z-10"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}
