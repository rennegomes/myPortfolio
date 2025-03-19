'use client'

import React from "react";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

export default function Template({children}: {children: React.ReactNode}){
    const pathname = usePathname()
    return(
        <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.75, ease: 'easeInOut' },
            }}
        >
            {children}
        </motion.div>
    )
}