"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ThreatCardProps {
  title: string;
  description: string;
  image: string;
  source: {
    name: string;
    url: string;
  };
  index: number;
  badge?: string;
  statistic?: {
    value: string;
    label: string;
  };
}

export default function ThreatCard({ 
  title, 
  description, 
  image, 
  source, 
  index,
  badge,
  statistic
}: ThreatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive" className="font-semibold">
                {badge}
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="flex items-center text-xs">
            Fuente: {source.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-4">{description}</p>
          
          {statistic && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-2xl font-bold">{statistic.value}</p>
              <p className="text-xs text-muted-foreground">{statistic.label}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
              <span>Más información</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}