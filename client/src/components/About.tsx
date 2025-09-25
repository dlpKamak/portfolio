import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Brain, Users, Award, Globe } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "CUDA-based ELM models, NLP classifiers, diffusion models, and AWS ML services",
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, business intelligence, and data warehouse management",
      color: "text-green-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Angular, Java APIs, cloud integration, and modern web technologies",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Teaching & Mentoring",
      description: "Instructional design for AI, Big Data, Cloud Computing, and RDBMS courses",
      color: "text-orange-500"
    }
  ];

  const achievements = [
    { metric: "10+", label: "Years Experience" },
    { metric: "94.4%", label: "Model Accuracy" },
    { metric: "6000", label: "Hours Saved" },
    { metric: "30%", label: "Rollout Reduction" },
  ];

  const skills = [
    "Python", "Java", "Angular", "MongoDB", "AWS", "Azure", 
    "Machine Learning", "Data Analytics", "Project Management", 
    "Agile", "DevOps", "Cloud Computing"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="about-title"
          >
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a proven track record of transforming complex challenges 
            into innovative solutions across AI/ML, data engineering, and education.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {achievement.metric}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover-elevate">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <highlight.icon className={`w-8 h-8 ${highlight.color} mr-4 flex-shrink-0`} />
                <CardTitle className="text-lg">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium"
                data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>English</span>
                  <Badge variant="outline">Fluent</Badge>
                </div>
                <div className="flex justify-between">
                  <span>French</span>
                  <Badge variant="outline">CLB/NCLC Level 2</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Key Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>• Azure Data Scientist Associate</div>
                <div>• Microsoft Fabric Associate</div>
                <div>• PMI Gen AI for Project Managers</div>
                <div>• WhiteHat Certified Secure Developer</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}