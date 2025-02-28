"use client";

import { Video, BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MultimediaResources() {
  const videos = [
    {
      title: "Cómo Actuar ante un Ataque DDoS",
      description: "Guía práctica para identificar y mitigar ataques de denegación de servicio distribuido.",
      thumbnail: "https://i.ytimg.com/an_webp/_sVObRVfoms/mqdefault_6s.webp?du=3000&sqp=CMash74G&rs=AOn4CLCY9d8xD6DbzuO45YMD5kLAKaOxMg",
      url: "https://www.youtube.com/watch?v=_sVObRVfoms&ab_channel=Cegamer",
      channel: "@Cegamer"
    },
    {
      title: "Zero Trust: Protegiendo Empresas",
      description: "Implementación del modelo Zero Trust para proteger infraestructuras críticas.",
      thumbnail: "https://i.ytimg.com/vi/qb-M8VpMx2w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmRy4SImyK_SBn6XPmKVdzdQQgNQ",
      url: "https://youtu.be/qb-M8VpMx2w?si=r6F2_xLFFb-LeWHu",
      channel: "@AlbertoLopezVLOG"
    },
    {
      title: "Simulación de Ransomware en Infraestructuras Críticas",
      description: "Ejercicio práctico de simulación de ataque y respuesta a ransomware.",
      thumbnail: "https://i.ytimg.com/an_webp/A62s4DN7kd8/mqdefault_6s.webp?du=3000&sqp=CN-dh74G&rs=AOn4CLAXNKi52qZOdIx2Y1lQKM5vdaF2xQ",
      url: "https://youtu.be/A62s4DN7kd8?si=m2NUoZKTG7WNuI50",
      channel: "@CCNCERT-CCN"
    }
  ];
  
  const resources = [
    {
      title: "Guía de Seguridad para Dispositivos IoT",
      description: "Tesis: Análisis Integral de Seguridad en Dispositivos IoT.",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      url: "https://openaccess.uoc.edu/bitstream/10609/150709/4/oliveiraTFG0624memoria.pdf"
    },
    {
      title: "Monthly Threat Report de febrero de 2025",
      description: "Tendencias de seguridad de M365, las amenazas basadas en el correo electrónico.",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      url: "https://www.hornetsecurity.com/es/blog/monthly-threat-report/"
    },
    {
      title: "Mejores escáner de vulnerabilidades gratis para hacker ético",
      description: "Recursos gratuitos para identificar y corregir vulnerabilidades en sistemas.",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      url: "https://www.redeszone.net/tutoriales/seguridad/mejores-escaner-vulnerabilidades-gratis-hacker/"
    }
  ];

  return (
    <section className="py-12">
      <SectionHeading 
        id="recursos"
        title="Recursos Multimedia" 
        subtitle="Videos y documentación para profundizar en ciberseguridad"
        icon={<Video className="h-6 w-6 text-primary" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Video className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{video.title}</CardTitle>
                <CardDescription>{video.channel}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Ver video</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50"
      >
        <h3 className="text-xl font-bold mb-6">Documentación y Herramientas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-background/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  {resource.icon}
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Acceder</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-primary/10 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2">Test de Vulnerabilidad de Redes - Escáner Nmap online</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Escáner de red gratuito y de código abierto. Nmap se utiliza para descubrir hosts y servicios en una red informática enviando paquetes y analizando las respuestas.
              </p>
              <Button className="w-full md:w-auto" asChild>
                <a href="https://nmap.online/es/" target="_blank" rel="noopener noreferrer">
                  Realizar Test Gratuito
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
