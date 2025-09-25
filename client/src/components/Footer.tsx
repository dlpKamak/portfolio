import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:lkamak@lakeheadu.ca";
  };

  const handleLinkedInClick = () => {
    console.log("LinkedIn clicked");
    // TODO: Add actual LinkedIn URL
  };

  const handleGithubClick = () => {
    console.log("GitHub clicked");
    // TODO: Add actual GitHub URL
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Lakshmi Preethi Kamak</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI/ML Engineer, Data Scientist, and Instructional Designer with 10+ years of experience 
              in transforming complex challenges into innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground"
                onClick={scrollToTop}
                data-testid="footer-link-home"
              >
                Home
              </Button>
              <br />
              <Button 
                variant="ghost" 
                className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground"
                onClick={() => document.getElementById('ai-ml')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="footer-link-projects"
              >
                AI/ML Projects
              </Button>
              <br />
              <Button 
                variant="ghost" 
                className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="footer-link-experience"
              >
                Experience
              </Button>
              <br />
              <Button 
                variant="ghost" 
                className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="footer-link-contact"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                lkamak@lakeheadu.ca
              </div>
              <div className="text-sm text-muted-foreground">
                Thunder Bay, ON / Ottawa, ON
              </div>
              <div className="flex space-x-2 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleEmailClick}
                  data-testid="footer-social-email"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleLinkedInClick}
                  data-testid="footer-social-linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleGithubClick}
                  data-testid="footer-social-github"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Lakshmi Preethi Kamak. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}