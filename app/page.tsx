"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ExternalLink,
  AudioLines,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function LinktreePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    // {
    //   title: "Portfolio",
    //   url: "https://bolaji.de",
    //   icon: <ExternalLink className="h-5 w-5" />,
    //   color: {
    //     dark: "from-purple-500 to-indigo-500",
    //     light: "from-purple-400 to-indigo-400",
    //   },
    // },
    // {
    //   title: "GitHub Profile",
    //   url: "https://github.com/BolajiOlajide",
    //   icon: <Github className="h-5 w-5" />,
    //   color: {
    //     dark: "from-gray-700 to-gray-900",
    //     light: "from-gray-400 to-gray-600",
    //   },
    // },
    {
      title: "Lost in the World (Vol. 3)",
      url: "https://youtu.be/LoUGue4MXLc",
      icon: <Youtube className="h-5 w-5" />,
      color: {
        dark: "from-red-500 to-red-700",
        light: "from-red-400 to-red-600",
      },
    },
    {
      title: "Lost in the World (Vol. 2)",
      url: "https://youtu.be/OGZzSphab5c",
      icon: <Youtube className="h-5 w-5" />,
      color: {
        dark: "from-red-500 to-red-700",
        light: "from-red-400 to-red-600",
      },
    },
    {
      title: "Lost in the World (Vol. 1) - Live Mix",
      url: "https://www.youtube.com/watch?v=Boa4iBaIkbw",
      icon: <Youtube className="h-5 w-5" />,
      color: {
        dark: "from-red-500 to-red-700",
        light: "from-red-400 to-red-600",
      },
    },
    // {
    //   title: "Edits",
    //   url: "https://untitled.stream/library/project/T0mm6Nc2WikDiml9feTpA",
    //   icon: <Twitter className="h-5 w-5" />,
    //   color: {
    //     dark: "from-blue-400 to-blue-600",
    //     light: "from-blue-300 to-blue-500",
    //   },
    // },
    {
      title: "Instagram",
      url: "https://instagram.com/being__proton",
      icon: <Instagram className="h-5 w-5" />,
      color: {
        dark: "from-pink-500 to-rose-500",
        light: "from-pink-400 to-rose-400",
      },
    },
    {
      title: "Soundcloud",
      url: "https://soundcloud.com/protonmakesmusic",
      icon: <AudioLines className="h-5 w-5" />,
      color: {
        dark: "from-blue-600 to-blue-800",
        light: "from-blue-500 to-blue-700",
      },
    },
    {
      title: "Youtube Channel",
      url: "https://www.youtube.com/@beingproton",
      icon: <Youtube className="h-5 w-5" />,
      color: {
        dark: "from-emerald-500 to-teal-500",
        light: "from-emerald-400 to-teal-400",
      },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-300">
      <div className="w-full max-w-md mx-auto">
        {/* Theme toggle button */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5 dark:bg-white/5"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Profile section */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={profileVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/25608335?v=4"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-2xl font-bold text-slate-900 dark:text-white mb-2"
            whileHover={{ scale: 1.05 }}
          >
            PROTON
          </motion.h1>
          <motion.p
            className="text-slate-700 dark:text-slate-300 text-center max-w-xs mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer, Disc Jockey (DJ), Music producer. Sharing my
            journey and connecting with amazing people.
          </motion.p>
        </motion.div>

        {/* Links section */}
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-r dark:${link.color.dark} ${link.color.light}`}
                  animate={{
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 20px rgba(0, 0, 0, 0.1) dark:rgba(255, 255, 255, 0.2)"
                        : "0 0 0px rgba(0, 0, 0, 0)",
                  }}
                >
                  <div className="relative flex items-center justify-between bg-white/90 dark:bg-slate-900 rounded-xl p-4 h-14">
                    <div className="flex items-center">
                      <span className="mr-3 text-slate-900 dark:text-white">
                        {link.icon}
                      </span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {link.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{
                        x: hoveredIndex === index ? 0 : 5,
                        opacity: hoveredIndex === index ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center text-slate-600 dark:text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="mt-2 text-xs text-slate-500">
            Copyright © 2025 - present
          </div>
        </motion.div>
      </div>
    </div>
  );
}
