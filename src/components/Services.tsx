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
      title: "Neural Web Systems",
      description: "Next-generation web applications powered by advanced algorithms and quantum-inspired architectures",
      image: webDevImg,
      features: ["Quantum-Responsive Design", "Neural SEO Optimization", "Hyper-Speed Performance", "Future-Ready Stack"],
      color: "text-cyber-cyan"
    },
    {
      icon: Smartphone,
      title: "Quantum Mobile Apps",
      description: "Revolutionary mobile experiences with AI-driven interfaces and neural network integration",
      image: mobileDevImg,
      features: ["Neural iOS & Android", "Quantum Cross-Platform", "AI-Powered UX", "Smart Adaptive UI"],
      color: "text-cyber-blue"
    },
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Cutting-edge artificial intelligence solutions with deep learning and cognitive computing",
      image: aiDevImg,
      features: ["Deep Neural Networks", "Cognitive Automation", "Predictive Analytics", "Sentient Chatbots"],
      color: "text-cyber-purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-neural bg-clip-text text-transparent">Neural Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We architect advanced digital ecosystems using quantum computing principles, 
            neural networks, and AI-driven technologies that redefine what's possible
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-hologram transition-all duration-300 bg-gradient-card border-cyber-cyan/20 hover:border-cyber-cyan/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className={`absolute bottom-4 left-4 p-3 rounded-full bg-background/90 backdrop-blur-sm ${service.color} shadow-cyber`}>
                    <service.icon className="w-6 h-6" />
                    <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse opacity-50"></div>
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
                <Button variant="cyber" className="w-full group">
                  Access Neural Interface
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-cyber-cyan/30 shadow-neural backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose GEMMA SMART?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative p-4 rounded-full bg-cyber-cyan/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-cyber-cyan/30">
                <Globe className="w-8 h-8 text-cyber-cyan" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Neural Global Network</h4>
              <p className="text-muted-foreground">Quantum-encrypted worldwide deployment with AI-powered 24/7 autonomous support</p>
            </div>
            <div className="text-center">
              <div className="relative p-4 rounded-full bg-cyber-blue/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-cyber-blue/30">
                <Zap className="w-8 h-8 text-cyber-blue" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Quantum Processing</h4>
              <p className="text-muted-foreground">Hyper-speed development using quantum algorithms and neural acceleration</p>
            </div>
            <div className="text-center">
              <div className="relative p-4 rounded-full bg-cyber-purple/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-cyber-purple/30">
                <Users className="w-8 h-8 text-cyber-purple" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              <h4 className="text-lg font-semibold mb-2">AI Expert Collective</h4>
              <p className="text-muted-foreground">Human-AI hybrid team with decades of future technology experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;