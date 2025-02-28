"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>Infografía Interactiva: </span><span> Ciberseguridad 2024-2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Amenazas Cibernéticas <span className="text-primary">Globales y Locales</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Análisis detallado de las amenazas cibernéticas actuales, con enfoque en Venezuela y estrategias de prevención efectivas para 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Lock className="h-4 w-4" />
              <a href="#estrategias">Explorar Estrategias</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <a href="#amenazas-globales">Ver Amenazas Globales</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <a href="#caso-venezuela">Ver Amenazas Locales</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-lg mx-auto left-4 top-8"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold mb-2">Protege tu Infraestructura Digital</h3>
                <p className="text-muted-foreground">Descubre las últimas tendencias en ciberataques y cómo defenderte</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-destructive rounded-full"></div>
              <span className="text-sm font-medium">Alerta: Ransomware</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}