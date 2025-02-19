"use client"

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

interface CopyableCodeProps {
    code: string
    label?: string
}

export function CopyableCode({ code, label }: CopyableCodeProps) {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <div className="flex items-center w-full space-x-2">
            {label && (
                <span className="text-purple-400 font-semibold select-none">
                    {label}
                </span>
            )}
            <div className="flex items-center justify-between bg-gray-800 rounded-md p-2 font-mono text-sm flex-grow">
                <div className="flex items-center overflow-x-auto whitespace-nowrap">
                    <span className="text-green-500 mr-2 select-none">{'>'}</span>
                    <code className="text-gray-300">{code}</code>
                    <motion.span
                        className="inline-block w-2 h-4 bg-gray-400 ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    />
                </div>
                <button
                    onClick={copyToClipboard}
                    className="ml-2 p-1 rounded-md hover:bg-gray-700 transition-colors relative"
                    aria-label="Copy to clipboard"
                >
                    <motion.div
                        initial={false}
                        animate={isCopied ? { scale: 0 } : { scale: 1 }}
                    >
                        <Copy className="w-4 h-4 text-gray-400" />
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={isCopied ? { scale: 1 } : { scale: 0 }}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    >
                        <Check className="w-4 h-4 text-green-500" />
                    </motion.div>
                </button>
            </div>
        </div>
    )
}
