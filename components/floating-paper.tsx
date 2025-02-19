"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from 'lucide-react'

export function FloatingPaper({ count = 5 }) {
    const [papers, setPapers] = useState<{ x: number; y: number }[]>([])
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

    useEffect(() => {
        // Generate initial positions
        const initialPapers = Array.from({ length: count }, () => ({
            x: Math.random(),
            y: Math.random(),
        }))
        setPapers(initialPapers)

        // Update dimensions
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [count])

    return (
        <div className="relative w-full h-full">
            {papers.map((paper, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        x: paper.x * dimensions.width,
                        y: paper.y * dimensions.height,
                    }}
                    animate={{
                        x: [
                            paper.x * dimensions.width,
                            (paper.x + Math.random() * 0.1 - 0.05) * dimensions.width,
                            paper.x * dimensions.width,
                        ],
                        y: [
                            paper.y * dimensions.height,
                            (paper.y + Math.random() * 0.1 - 0.05) * dimensions.height,
                            paper.y * dimensions.height,
                        ],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
                        <FileText className="w-8 h-8 text-purple-400/50" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}