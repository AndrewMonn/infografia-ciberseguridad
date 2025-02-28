import Header from "@/components/header";
import Hero from "@/components/hero";
import GlobalThreats from "@/components/global-threats";
import VenezuelaThreats from "@/components/venezuela-threats";
import PreventionStrategies from "@/components/prevention-strategies";
import MultimediaResources from "@/components/multimedia-resources";
import Footer from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
      <Header />
      <ScrollArea className="h-screen">
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <GlobalThreats />
          <VenezuelaThreats />
          <PreventionStrategies />
          <MultimediaResources />
          <Footer />
        </main>
      </ScrollArea>
    </div>
  );
}