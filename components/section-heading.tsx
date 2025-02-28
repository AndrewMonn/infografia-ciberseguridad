"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function SectionHeading({ id, title, subtitle, icon }: SectionHeadingProps) {
  return (
    <motion.div 
      id={id}
      className="mb-12 pt-16 -mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <Separator className="mt-4" />
    </motion.div>
  );
}