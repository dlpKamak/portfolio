import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    email: "lkamak@lakeheadu.ca",
    phone: "+1 807 709 5628",
    location: "Thunder Bay, ON / Ottawa, ON, Canada",
    availability: "Available for full-time opportunities"
  };


  const opportunities = [
    "AI/ML Engineering Roles",
    "Data Science Positions",
    "Full-Stack Development",
    "Instructional Design", 
    "Research Collaborations",
    "Consulting Projects"
  ];

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Inquiry`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };


  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project, data engineering challenge, 
            or instructional design initiative. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                      <Button 
                        variant="ghost" 
                        className="h-auto p-0 text-left justify-start"
                        onClick={handleEmailClick}
                        data-testid="contact-email"
                      >
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        {contactInfo.email}
                      </Button>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Phone</div>
                      <Button 
                        variant="ghost" 
                        className="h-auto p-0 text-left justify-start"
                        onClick={handlePhoneClick}
                        data-testid="contact-phone"
                      >
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        {contactInfo.phone}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                      <div className="flex items-center text-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {contactInfo.location}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Availability</div>
                      <div className="flex items-center text-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {contactInfo.availability}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <Button 
                    size="lg" 
                    onClick={handleEmailClick}
                    data-testid="button-primary-contact"
                    className="w-full md:w-auto"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Opportunity Areas */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Open To Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking to implement cutting-edge AI/ML solutions, optimize your data infrastructure, 
                or design effective learning experiences, I'm here to help bring your vision to life.
              </p>
              <Button 
                size="lg" 
                onClick={handleEmailClick}
                data-testid="button-cta-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}