"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 relative z-50"
        >
            <Link href="/" className="flex items-center space-x-2">
                <Bot className="w-8 h-8 text-purple-500" />
                <span className="text-white font-medium text-xl">runall.io</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
                <NavLink href="/features">Features</NavLink>
                <NavLink href="/how-it-works">How it Works</NavLink>
                <NavLink href="/use-cases">Use cases</NavLink>
                <NavLink href="/early-access">Early access</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" className="text-white hover:text-purple-400">
                    Sign In
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm py-4 md:hidden z-50"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <NavLink href="/features" onClick={toggleMenu}>Features</NavLink>
                            <NavLink href="/how-it-works" onClick={toggleMenu}>How it Works</NavLink>
                            <NavLink href="/use-cases" onClick={toggleMenu}>Use cases</NavLink>
                            <NavLink href="/early-access" onClick={toggleMenu}>Early access</NavLink>

                            <Button variant="ghost" className="text-white hover:text-purple-400" onClick={toggleMenu}>
                                Sign In
                            </Button>
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={toggleMenu}>
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <Link
            href={href}
            className="text-gray-300 hover:text-white transition-colors relative group"
            onClick={onClick}
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
        </Link>
    )
}