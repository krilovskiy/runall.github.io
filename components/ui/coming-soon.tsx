"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Coming Soon</h1>
                <p className="text-xl text-gray-400 mb-8">We are working hard to bring you something amazing!</p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                >
                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                        <Link href="/" className="flex items-center">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}