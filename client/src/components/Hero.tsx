import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import professionalPhoto from "@assets/ChatGPT Image Sep 11, 2025 at 03_13_36 PM_1758839315663.png";
import { Mail, Linkedin, Github, Download } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "AI/ML Engineer",
    "Data Scientist", 
    "Instructional Designer",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:lkamak@lakeheadu.ca";
  };

  const handleLinkedInClick = () => {
    console.log("LinkedIn profile clicked");
    // TODO: Add actual LinkedIn URL when available
  };

  const handleGithubClick = () => {
    console.log("GitHub profile clicked");
    // TODO: Add actual GitHub URL when available
  };

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    // TODO: Implement CV download functionality
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
            <AvatarImage src={professionalPhoto} alt="Lakshmi Preethi Kamak" className="object-cover" />
            <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
              LK
            </AvatarFallback>
          </Avatar>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            data-testid="hero-name"
          >
            Lakshmi Preethi Kamak
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold transition-all duration-500"
              data-testid="hero-role"
              key={currentRole}
            >
              {roles[currentRole]}
            </p>
          </div>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6"
            data-testid="hero-description"
          >
            10+ years of expertise in end-to-end software development, AI/ML research, and instructional design. 
            Transforming complex data into actionable insights and building modern tech solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            onClick={onContactClick}
            data-testid="button-contact"
            className="min-w-32"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleDownloadCV}
            data-testid="button-download-cv"
            className="min-w-32"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEmailClick}
            data-testid="link-email"
            aria-label="Email"
            className="h-12 w-12"
          >
            <Mail className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLinkedInClick}
            data-testid="link-linkedin"
            aria-label="Link"
            className="h-12 w-12"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleGithubClick}
            data-testid="link-github"
            aria-label="GitHub"
            className="h-12 w-12"
          >
            <Github className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Canada Revenue Agency</span>
            <span>•</span>
            <span className="text-sm">Lakehead University</span>
            <span>•</span>
            <span className="text-sm">Masters in CS (9.7 GPA)</span>
          </div>
        </div>
      </div>
    </section>
  );
}