import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, GraduationCap, Target, TrendingUp } from "lucide-react";

export default function InstructionalDesign() {
  const teachingExperience = [
    {
      course: "Big Data Analytics",
      level: "Undergraduate",
      topics: ["Hadoop", "Spark", "Data Mining", "Distributed Computing"],
      icon: BookOpen
    },
    {
      course: "Artificial Intelligence",
      level: "Undergraduate", 
      topics: ["Machine Learning", "Neural Networks", "Computer Vision", "NLP"],
      icon: GraduationCap
    },
    {
      course: "Cloud Computing",
      level: "Undergraduate",
      topics: ["AWS", "Azure", "Distributed Systems", "Microservices"],
      icon: Target
    },
    {
      course: "Relational Database Management Systems",
      level: "Undergraduate",
      topics: ["SQL", "Database Design", "Query Optimization", "ACID Properties"],
      icon: TrendingUp
    }
  ];

  const achievements = [
    {
      title: "NSERC PromoScience 'Coding with Python' Program",
      period: "2021-2022",
      organization: "Lakehead University & Armstrong Public School",
      highlights: [
        "Designed and delivered Python programming curriculum for Grade 7-8 Indigenous students",
        "Created culturally contextualized computational thinking activities including Three Sisters gardening concepts",
        "Developed comprehensive 150-page lab instruction manual with 7 interactive chapters",
        "Successfully transitioned to blended learning during COVID-19 with both online and in-person sessions",
        "Organized Science Odyssey campus visit for 25+ students including coding exercises and cultural packages",
        "Conducted student assessment using adapted Computational Thinking Questionnaire (CTQ) and Blended Learning Questionnaire (BLQ)"
      ]
    },
    {
      title: "Research Assistant - DaTALab",
      period: "2021-2023",
      organization: "Lakehead University",
      highlights: [
        "Assisted in undergraduate teaching across 4 technical courses",
        "Developed hands-on lab exercises and practical assignments",
        "Mentored students in capstone projects and research initiatives",
        "Created curriculum materials for emerging AI/ML technologies"
      ]
    },
    {
      title: "Student Success Impact",
      period: "2021-2023",
      organization: "Lakehead University", 
      highlights: [
        "Guided students to 1st place finish in university Hackathon",
        "Improved student engagement through practical, industry-relevant projects",
        "Developed assessment frameworks for technical skill evaluation",
        "Fostered collaborative learning environments in lab settings"
      ]
    }
  ];

  const philosophy = [
    {
      principle: "Hands-On Learning",
      description: "Emphasizing practical implementation alongside theoretical concepts to build real-world competency"
    },
    {
      principle: "Industry Relevance", 
      description: "Connecting academic concepts to current industry practices and emerging technology trends"
    },
    {
      principle: "Collaborative Environment",
      description: "Fostering peer learning and teamwork to simulate professional development environments"
    },
    {
      principle: "Continuous Assessment",
      description: "Using iterative feedback and project-based evaluation to track and improve learning outcomes"
    }
  ];

  return (
    <section id="instructional" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="instructional-title"
          >
            Instructional Design & Teaching
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging the gap between academic theory and industry practice through 
            innovative curriculum design and hands-on learning experiences.
          </p>
        </div>

        {/* Teaching Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Course Instruction Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {teachingExperience.map((course, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <course.icon className="w-6 h-6 mr-3 text-primary" />
                    {course.course}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">{course.level}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <Badge 
                        key={topicIndex} 
                        variant="secondary" 
                        className="text-xs"
                        data-testid={`topic-${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Teaching Achievements & Impact
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{achievement.organization}</span>
                    <span>•</span>
                    <span>{achievement.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Teaching Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    {item.principle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground bg-card px-6 py-3 rounded-lg border">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-medium">NSERC PromoScience Scholarship Recipient</span>
          </div>
        </div>
      </div>
    </section>
  );
}