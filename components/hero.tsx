"use client"

import { Button } from "@/components/ui/button"
import { CopyableCode } from "@/components/ui/copyable-code"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

import { RoboAnimation } from "@/components/robo-animation"

import dynamic from 'next/dynamic'

const FloatingPaper = dynamic(() => import('@/components/floating-paper').then(mod => mod.FloatingPaper), { ssr: false })

export default function Hero() {
    return (
        <div className="relative min-h-[calc(100vh-76px)] flex items-center">
            {/* Floating papers background */}
            <div className="absolute inset-0 overflow-hidden">
                <FloatingPaper count={6} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Manage and Monitor Your Applications with
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                                runall
              </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
                    >
                        With runall, you can run and control applications on servers, monitor metrics, and manage containers—all in one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <CopyableCode code="curl runall.io | sh" label="Install:"/>
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                            <FileText className="mr-2 h-5 w-5" />
                            Docs
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Animated robot */}
            <div className="absolute bottom-0 right-0 w-96 h-96">
                <RoboAnimation />
            </div>
        </div>
    )
}

