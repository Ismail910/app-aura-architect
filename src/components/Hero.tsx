import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";
import heroBg from "@/assets/sci-fi-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-tech-blue rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-tech-purple rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="text-sm text-cyber-cyan font-medium">🚀 Advanced AI & Neural Technologies</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the{" "}
            <span className="bg-gradient-neural bg-clip-text text-transparent animate-hologram">
              Future of Technology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Pioneering next-generation digital solutions with cutting-edge AI, quantum-inspired algorithms, 
            and neural networks that transform imagination into reality.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-gradient-card border border-cyber-cyan/30 shadow-cyber">
                <Code className="w-6 h-6 text-cyber-cyan" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse"></div>
              </div>
              <span className="text-sm text-muted-foreground">Neural Web</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-gradient-card border border-cyber-blue/30 shadow-neural">
                <Smartphone className="w-6 h-6 text-cyber-blue" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <span className="text-sm text-muted-foreground">Quantum Mobile</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative p-3 rounded-full bg-gradient-card border border-cyber-purple/30 shadow-hologram">
                <Brain className="w-6 h-6 text-cyber-purple" />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              <span className="text-sm text-muted-foreground">AI Intelligence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="cyber" size="lg" className="group">
              Initialize Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="neural" size="lg">
              Explore Neural Network
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-cyan mb-2 animate-neural-pulse">500+</div>
              <div className="text-sm text-muted-foreground">Neural Networks Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-blue mb-2 animate-neural-pulse" style={{ animationDelay: '0.5s' }}>150+</div>
              <div className="text-sm text-muted-foreground">AI Solutions Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-purple mb-2 animate-neural-pulse" style={{ animationDelay: '1s' }}>10+</div>
              <div className="text-sm text-muted-foreground">Years in Future Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;