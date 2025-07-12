import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <span className="text-sm text-primary font-medium">🚀 Leading Tech Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We Build{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transform your ideas into powerful websites, mobile apps, and AI solutions. 
            We craft technology that drives growth and innovation.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-card border border-primary/20">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Websites</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-card border border-primary/20">
                <Smartphone className="w-6 h-6 text-tech-blue" />
              </div>
              <span className="text-sm text-muted-foreground">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-card border border-primary/20">
                <Brain className="w-6 h-6 text-tech-purple" />
              </div>
              <span className="text-sm text-muted-foreground">AI Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-blue mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-purple mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;