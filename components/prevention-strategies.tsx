"use client";

import { ShieldCheck, Zap, Wifi, Users } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PreventionStrategies() {
  return (
    <section className="py-12">
      <SectionHeading 
        id="estrategias"
        title="Estrategias de Prevención" 
        subtitle="Medidas efectivas para proteger infraestructuras y datos sensibles"
        icon={<ShieldCheck className="h-6 w-6 text-primary" />}
      />
      
      <Tabs defaultValue="zero-trust" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="zero-trust" className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="hidden md:inline">Zero Trust</span>
          </TabsTrigger>
          <TabsTrigger value="automated-response" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="hidden md:inline">Respuesta Automatizada</span>
          </TabsTrigger>
          <TabsTrigger value="iot-protection" className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            <span className="hidden md:inline">Protección IoT</span>
          </TabsTrigger>
          <TabsTrigger value="awareness" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Concienciación</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="zero-trust">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Modelo «Zero Trust»</CardTitle>
                  <CardDescription>
                    Verificación constante de usuarios y dispositivos, incluso dentro de redes internas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    La verificación constante de usuarios y dispositivos, incluso dentro de redes internas, reduce riesgos significativamente. Empresas como Thales S21sec recomiendan segmentar redes críticas para contener brechas.
                  </p>
                  
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Principios clave</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Verificar explícitamente cada solicitud de acceso</li>
                          <li>Utilizar el principio de mínimo privilegio</li>
                          <li>Asumir que la red está comprometida</li>
                          <li>Implementar autenticación multifactor</li>
                          <li>Monitorizar y validar continuamente</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Beneficios</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Reducción del 60% en la superficie de ataque</li>
                          <li>Contención efectiva de brechas de seguridad</li>
                          <li>Mejor visibilidad de los accesos a recursos</li>
                          <li>Protección consistente independiente de la ubicación</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button asChild className="w-full">
                    <a href="https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview" target="_blank" rel="noopener noreferrer">
                      Consultar Guía Zero Trust
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Zero Trust Security Model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">Implementación por Capas</h3>
                  <p className="text-sm text-muted-foreground">
                    El modelo Zero Trust se implementa en capas, verificando identidad, dispositivo, red y datos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
        
        <TabsContent value="automated-response">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Respuesta Automatizada a Incidentes</CardTitle>
                  <CardDescription>
                    Herramientas de IA para detectar y neutralizar amenazas en segundos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Herramientas de IA pueden detectar y neutralizar amenazas en segundos. En 2024, talleres con empresas energéticas demostraron que simulaciones reducen el tiempo de respuesta un 60%.
                  </p>
                  
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Capacidades clave</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Detección de anomalías en tiempo real</li>
                          <li>Análisis de comportamiento de usuarios</li>
                          <li>Contención automática de amenazas</li>
                          <li>Orquestación de respuestas coordinadas</li>
                          <li>Aprendizaje continuo del sistema</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Resultados medibles</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Reducción del 60% en tiempo de respuesta</li>
                          <li>Disminución del 45% en impacto de incidentes</li>
                          <li>Ahorro del 30% en costos operativos</li>
                          <li>Mejora del 70% en detección de falsos positivos</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button asChild className="w-full">
                    <a href="https://www.ibm.com/security/automated-response" target="_blank" rel="noopener noreferrer">
                      Explorar Soluciones de Respuesta Automatizada
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Automated Incident Response"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">Ciclo de Respuesta</h3>
                  <p className="text-sm text-muted-foreground">
                    El ciclo de respuesta automatizada incluye detección, análisis, contención, erradicación y recuperación.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
        
        <TabsContent value="iot-protection">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Protección de IoT</CardTitle>
                  <CardDescription>
                    Estrategias para asegurar dispositivos conectados en hogares y empresas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Actualizar firmware y usar contraseñas robustas previene el 80% de los ataques a dispositivos IoT. Configurar VLANs para aislar dispositivos domésticos es clave.
                  </p>
                  
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Medidas esenciales</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Actualización regular de firmware</li>
                          <li>Contraseñas únicas y robustas</li>
                          <li>Segmentación de red mediante VLANs</li>
                          <li>Desactivación de servicios innecesarios</li>
                          <li>Monitorización de tráfico anómalo</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Dispositivos más vulnerables</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Routers y puntos de acceso WiFi</li>
                          <li>Cámaras de seguridad</li>
                          <li>Asistentes de voz</li>
                          <li>Termostatos inteligentes</li>
                          <li>Dispositivos médicos conectados</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button asChild className="w-full">
                    <a href="https://www.ninjaone.com/es/blog/proteger-los-dispositivos-iot/#:~:text=5%20buenas%20pr%C3%A1cticas%20para%20proteger%20los%20dispositivos%20IoT,5%29%20Elimina%20los%20dispositivos%20IoT%20no%20utilizados%20" target="_blank" rel="noopener noreferrer">
                      Guía de Seguridad IoT
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="IoT Security"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">Hogar Inteligente Seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    La segmentación de red y las actualizaciones regulares son fundamentales para proteger hogares inteligentes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
        
        <TabsContent value="awareness">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Concienciación Ciudadana</CardTitle>
                  <CardDescription>
                    Educación y formación para reducir el factor humano en ciberataques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    El 80% de los ataques exitosos se deben a errores humanos. Campañas públicas con pruebas interactivas han reducido incidentes un 35% en España.
                  </p>
                  
                  <Accordion type="single" collapsible className="mb-4">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Elementos de formación</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Reconocimiento de intentos de phishing</li>
                          <li>Gestión segura de contraseñas</li>
                          <li>Uso de autenticación multifactor</li>
                          <li>Navegación segura en internet</li>
                          <li>Protección de datos personales</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Resultados de campañas</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>Reducción del 35% en incidentes de seguridad</li>
                          <li>Mejora del 60% en detección de phishing</li>
                          <li>Aumento del 45% en uso de autenticación multifactor</li>
                          <li>Disminución del 40% en infecciones por malware</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button asChild className="w-full">
                    <a href="https://www.metacompliance.com/es/resources/cyber-security-awareness-month" target="_blank" rel="noopener noreferrer">
                      Recursos de Concienciación
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Cybersecurity Awareness"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">Formación Continua</h3>
                  <p className="text-sm text-muted-foreground">
                    La formación regular y las simulaciones de phishing son fundamentales para mantener la conciencia de seguridad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}