"use client";

import { Globe, Cpu, Wifi } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ThreatCard from "@/components/threat-card";
import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCounter from "@/components/animated-counter";

const ransomwareCostData = [
  { year: 2024, cost: 42 },
  { year: 2025, cost: 65 },
  { year: 2026, cost: 89 },
  { year: 2027, cost: 120 },
  { year: 2028, cost: 150 },
  { year: 2029, cost: 180 },
  { year: 2030, cost: 210 },
  { year: 2031, cost: 265 , projected: true },
];

const aiAttackData = [
  { category: 'Phishing', traditional: 32, aiPowered: 43 },
  { category: 'Malware', traditional: 28, aiPowered: 37 },
  { category: 'Social Eng.', traditional: 25, aiPowered: 41 },
  { category: 'DDoS', traditional: 18, aiPowered: 24 },
];

export default function GlobalThreats() {
  return (
    <section className="py-12">
      <SectionHeading 
        id="amenazas-globales"
        title="Amenazas Globales (2024-2025)" 
        subtitle="Análisis de las principales amenazas cibernéticas a nivel mundial"
        icon={<Globe className="h-6 w-6 text-primary" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ThreatCard
          title="Informe de ransomware en el sector salud de Microsoft Threat Intelligence"
          description="Los ataques de ransomware son costosos, y las organizaciones sanitarias pierden una media de 900.000 dólares al día sólo en el tiempo de ..."
          image="https://pub-aad5aee0e7644183b75c927686087237.r2.dev/2024/10/1260x708_MSFT_Security_Insider_Healthcare_Ransomware_Report.webp"
          source={{
            name: "Microsoft News",
            url: "https://news.microsoft.com/source/latam/noticias-de-microsoft/informe-de-ransomware-en-el-sector-salud-de-microsoft-threat-intelligence/"
          }}
          index={0}
          badge="Alto Riesgo"
          statistic={{
            value: "$900.000 al día",
            label: "Coste global Segundo Trimestre 2024"
          }}
        />
        
        <ThreatCard
          title="Ciberataques basados en Inteligencia Artificial"
          description=" Los ciberdelincuentes, con la ayuda de la IA, pueden imitar la redacción de correos electrónicos suplantando a otras personas de la misma empresa o simular una ..."
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          source={{
            name: "BBVA ES",
            url: "https://www.microsoft.com/security/blog/2024/12/15/ai-cyber-threats/"
          }}
          index={1}
          badge="Emergente"
          statistic={{
            value: "43%",
            label: "Ataques phishing con IA"
          }}
        />
        
        <ThreatCard
          title="Vulnerabilidades en Dispositivos IoT"
          description="En el contexto sanitario actual, la integración de dispositivos del Internet de las Cosas Médicas (IoMT) ha transformado la atención al..."
          image="https://prensariotila.com/wp-content/uploads/2025/02/unnamed-40-1-780x470.jpg"
          source={{
            name: "Editorial Prensario S.R.L - Prensario TI Latin America",
            url: "https://prensariotila.com/en-el-sector-sanitario-las-amenazas-se-han-incrementado-un-47/"
          }}
          index={2}
          statistic={{
            value: "47%",
            label: "De incremento en las amenazas en el sector sanitario"
          }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-chart-1" />
                Estimación de Coste Global del Ransomware (Billones de €)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={ransomwareCostData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--card-foreground))'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="cost" 
                      stroke="hsl(var(--chart-1))" 
                      fillOpacity={1} 
                      fill="url(#colorCost)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Fuente: ENISA - Agencia de la Unión Europea para la Ciberseguridad (2025)
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-chart-2" />
                Comparativa: Ataques Tradicionales vs. IA (2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={aiAttackData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--card-foreground))'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="traditional" name="Tradicionales (%)" fill="hsl(var(--chart-3))" />
                    <Bar dataKey="aiPowered" name="Potenciados por IA (%)" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Fuente: DISRUPTIVE - Asociación de Parques Científicos y Tecnológicos de España (2024)
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-2">Coste global Segundo Trimestre 2024</h3>
          <AnimatedCounter end={900000} suffix=" $ al día" />
          <p className="text-sm text-muted-foreground mt-2">Impacto económico del ransomware en 2024</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-2">Ataques con IA</h3>
          <AnimatedCounter end={43} suffix="%" />
          <p className="text-sm text-muted-foreground mt-2">Phishing con mensajes generados por IA</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50"
        >
          <h3 className="text-lg font-semibold mb-2">Dispositivos IoT</h3>
          <AnimatedCounter end={47} suffix="%" />
          <p className="text-sm text-muted-foreground mt-2">De incremento en las amenazas en el sector sanitario</p>
        </motion.div>
      </div>
    </section>
  );
}