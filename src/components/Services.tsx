import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Brain, ArrowRight, Globe, Zap, Users } from "lucide-react";
import webDevImg from "@/assets/web-dev.jpg";
import mobileDevImg from "@/assets/mobile-dev.jpg";
import aiDevImg from "@/assets/ai-dev.jpg";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies",
      image: webDevImg,
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Tech Stack"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      image: mobileDevImg,
      features: ["iOS & Android", "Cross-Platform", "App Store Ready", "User-Friendly UI"],
      color: "text-tech-blue"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered applications for your business",
      image: aiDevImg,
      features: ["Machine Learning", "Automation", "Data Analytics", "Smart Chatbots"],
      color: "text-tech-purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className={`absolute bottom-4 left-4 p-3 rounded-full bg-background/90 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose GEMMA SMART?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Reach</h4>
              <p className="text-muted-foreground">We serve clients worldwide with 24/7 support and multilingual capabilities</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-tech-blue/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-tech-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-muted-foreground">Rapid development cycles without compromising on quality or security</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-tech-purple/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-tech-purple" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
              <p className="text-muted-foreground">Skilled developers and designers with years of industry experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;