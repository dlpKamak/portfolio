import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Database, Eye, Award, ExternalLink, Github } from "lucide-react";

export default function AIMLProjects() {
  const projects = [
    {
      title: "CUDA-based ELM Model",
      category: "Machine Learning",
      description: "Implemented high-performance Extreme Learning Machine using CUDA acceleration, achieving 94.4% accuracy in classification tasks and securing 1st place in university Hackathon.",
      technologies: ["CUDA", "Python", "NumPy", "GPU Computing", "Machine Learning"],
      metrics: {
        accuracy: "94.4%",
        award: "1st Place Hackathon",
        performance: "GPU Accelerated"
      },
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "NLP Classification Pipeline",
      category: "Natural Language Processing",
      description: "Developed comprehensive text classification system using advanced NLP techniques including text embedding methods and transformer models for sentiment analysis and document categorization.",
      technologies: ["Python", "NLP", "Text Embeddings", "Transformers", "Scikit-learn"],
      metrics: {
        accuracy: "High Performance",
        scope: "Multi-class Classification", 
        deployment: "Production Ready"
      },
      icon: Database,
      color: "text-green-500"
    },
    {
      title: "AI Mirror with OpenCV",
      category: "Computer Vision",
      description: "Created innovative AI mirror application using OpenCV and diffusion models for real-time facial recognition, emotion detection, and augmented reality features.",
      technologies: ["OpenCV", "Python", "Diffusion Models", "Computer Vision", "Real-time Processing"],
      metrics: {
        latency: "Real-time",
        features: "Multi-modal",
        innovation: "Concept AI Mirror"
      },
      icon: Eye,
      color: "text-purple-500"
    },
    {
      title: "AWS Personalize Recommendation System",
      category: "Recommendation Systems",
      description: "Built scalable recommendation engine using AWS Personalize and SageMaker, handling large-scale user behavior data with automated model training and deployment pipelines.",
      technologies: ["AWS Personalize", "SageMaker", "Python", "AWS EMR", "Machine Learning"],
      metrics: {
        scale: "Large-scale",
        deployment: "AWS Cloud",
        automation: "ML Pipelines"
      },
      icon: Award,
      color: "text-orange-500"
    },
    {
      title: "Computational Thinking Research in Blended Learning",
      category: "Educational AI Research",
      description: "Conducted comprehensive research on using Python to teach computational thinking to Indigenous students in remote schools through blended learning environments. Developed assessment instruments combining BLQ and CTQ questionnaires.",
      technologies: ["Python", "Educational Research", "Survey Design", "Statistical Analysis", "Blended Learning"],
      metrics: {
        publication: "HCI International",
        impact: "Remote Schools",
        methodology: "Mixed Methods"
      },
      icon: Brain,
      color: "text-cyan-500"
    }
  ];

  const researchAreas = [
    {
      area: "Deep Learning",
      topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"]
    },
    {
      area: "Natural Language Processing",
      topics: ["Text Classification", "Sentiment Analysis", "Language Models", "Embeddings"]
    },
    {
      area: "Computer Vision", 
      topics: ["Image Recognition", "Object Detection", "Diffusion Models", "OpenCV"]
    },
    {
      area: "Cloud ML",
      topics: ["AWS SageMaker", "AWS EMR", "Model Deployment", "Scalable ML"]
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    console.log(`Project clicked: ${projectTitle}`);
    // TODO: Implement project detail modal or navigation
  };

  const handleGithubClick = (projectTitle: string) => {
    console.log(`GitHub clicked for: ${projectTitle}`);
    // TODO: Add actual GitHub repository links
  };

  return (
    <section id="ai-ml" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="ai-ml-title"
          >
            AI/ML Projects & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge artificial intelligence and machine learning projects demonstrating 
            expertise in deep learning, computer vision, NLP, and cloud-based ML solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate group cursor-pointer" onClick={() => handleProjectClick(project.title)}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <project.icon className={`w-8 h-8 ${project.color} mt-1 flex-shrink-0`} />
                    <div>
                      <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGithubClick(project.title);
                    }}
                    data-testid={`github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Research Areas & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {area.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm text-muted-foreground">
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-6">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">94.4%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">1st</div>
                  <div className="text-sm text-muted-foreground">Hackathon Place</div>
                </div>
                <div className="text-center">
                  <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">ML Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}