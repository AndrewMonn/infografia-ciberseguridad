"use client";

import { MapPin, Database } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ThreatCard from "@/components/threat-card";
import { motion } from "framer-motion";
import { 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

const attackTypeData = [
  { name: "DDoS", value: 65 },
  { name: "Robo de información (Phishing/Malware)", value: 17 },
  { name: "Ampliación de DNS", value: 6.9 },
  { name: "Secuestro de rutas BGP", value: 3.45 },
  { name: "Desfiguración de páginas web", value: 3.44 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function VenezuelaThreats() {
  return (
    <section className="py-12">
      <SectionHeading 
        id="caso-venezuela"
        title="Caso Venezuela: Amenazas Locales" 
        subtitle="Análisis de las principales amenazas cibernéticas en Venezuela"
        icon={<MapPin className="h-6 w-6 text-primary" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ThreatCard
          title="Ataques DDoS Masivos"
          description='El 28 de julio de 2024 se registraron 500 mil ataques cibernéticos por segundo, situación que calificó como "sin precedentes en el mundo".'
          image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          source={{
            name: "Delcy Rodríguez - Vicepresidenta de Venezuela",
            url: "https://misionverdad.com/venezuela/nuevos-datos-sobre-el-ataque-cibernetico-contra-venezuela"
          }}
          index={0}
          badge="Crítico"
          statistic={{
            value: "+25",
            label: "Instituciones Afectadas por Ataques DDoS"
          }}
        />
        
        <ThreatCard
          title="Robo de Información Sensible"
          description="Ciberdelincuentes realizan una triangulación entre víctimas. Ejemplificó con el caso de la maestra: usaron la técnica del phishing cuando accedió al enlace malicioso en Facebook..."
          image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          source={{
            name: "La Revista del Tuy",
            url: "https://larevistadeltuy.com/ciberdelincuentes-que-usan-cuentas-del-banco-de-venezuela-perfeccionan-estafa-ahora-relacionan-a-las-victimas/"
          }}
          index={1}
          statistic={{
            value: "60",
            label: "Denuncias Diarias en 2025 por Pishing a BDVenlinea"
          }}
        />
        
        <ThreatCard
          title="Secuestro de Rutas BGP"
          description="El 3.45% de los incidentes en 2024 desviaron tráfico a servidores falsos, afectando plataformas de votación electrónica. Esta técnica explota vulnerabilidades en el protocolo BGP."
          image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          source={{
            name: "Gabriela Jiménez - Ministra de Ciencia y Tecnología",
            url: "https://www.prensa-latina.cu/2024/08/12/ataque-cibernetico-afecto-todas-las-plataformas-del-estado-venezolano/"
          }}
          index={2}
          badge="Técnico"
          statistic={{
            value: "3.45%",
            label: "Incidentes de secuestro BGP"
          }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-chart-2" />
                Distribución de Tipos de Ataques (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attackTypeData}
                      cx="40%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="hsl(var(--chart-1))"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {attackTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--card-foreground))',
                      }}
                      formatter={(value) => [`${value}%`, 'Porcentaje']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Fuente: Gabriela Jiménez - Ministra de Ciencia y Tecnología (2024)
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}