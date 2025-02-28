"use client";

import { Shield} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8">
      <Separator className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">CiberSeguridad 2025</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Infografía interactiva sobre amenazas cibernéticas globales y en Venezuela, con estrategias de prevención y recursos multimedia.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-4">Secciones</h3>
          <ul className="space-y-2">
            <li>
              <a href="#amenazas-globales" className="text-muted-foreground hover:text-foreground transition-colors">
                Amenazas Globales
              </a>
            </li>
            <li>
              <a href="#caso-venezuela" className="text-muted-foreground hover:text-foreground transition-colors">
                Caso Venezuela
              </a>
            </li>
            <li>
              <a href="#estrategias" className="text-muted-foreground hover:text-foreground transition-colors">
                Estrategias de Prevención
              </a>
            </li>
            <li>
              <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
                Recursos Multimedia
              </a>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4">Fuentes</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.fabrick.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Fabrick
              </a>
            </li>
            <li>
              <a href="https://www.microsoft.com/security" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Microsoft Security
              </a>
            </li>
            <li>
              <a href="https://misionverdad.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                MISIONVERDAD.COM
              </a>
            </li>
            <li>
              <a href="https://ptedisruptive.es//" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                DISRUPTIVE
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground pt-4">
        <p>© 2025 Ciberseguridad. Todos los derechos reservados.</p>
        <p className="mt-1">
          Desarrollado por Andres Luna, Franklin Hernandez, Kilmer Hernandez y Mariam Ortiz
        </p>
      </div>
    </footer>
  );
}