
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      title: "Toxic Comment Classification",
      description: "Multi-label toxic comment classifier using Bi-LSTM with Attention and pre-trained GloVe embeddings",
      tech: ["TensorFlow", "Python", "LSTM", "NLP"],
      metrics: "ROC AUC: 0.977",
      github: "https://github.com/AlharthAlhajHussein/Classify-Toxic-Comment-by-Bi-LSTM-with-Attention-and-Glove-Embedding",
      highlights: ["Real-time GUI integration", "6 toxicity categories", "Advanced attention mechanism"]
    },
    {
      title: "Arabic Letters Audio Recognition",
      description: "SVM-based Arabic letter classification from audio inputs with advanced feature extraction",
      tech: ["Scikit-learn", "Librosa", "Python", "SVM"],
      metrics: "63% accuracy on 1,400 samples",
      github: "https://github.com/AlharthAlhajHussein/Classifying-Arabic-Letters-From-Audio-Dataset-Using-SVM",
      highlights: ["MFCC feature extraction", "Real-time recording GUI", "Advanced audio processing"]
    },
    {
      title: "Data Science Salaries Analysis",
      description: "Comprehensive EDA with interactive Power BI dashboards analyzing compensation drivers",
      tech: ["Power BI", "Python", "Data Analysis", "Visualization"],
      metrics: "1000+ salary records analyzed",
      github: "https://github.com/AlharthAlhajHussein/EDA-For-Data-Science-Job-Salaries",
      highlights: ["5+ interactive dashboards", "Experience-skill correlation", "Market insights"]
    },
    {
      title: "Diamond Price Prediction",
      description: "Random Forest model with feature engineering for accurate diamond price forecasting",
      tech: ["Scikit-learn", "Random Forest", "Feature Engineering"],
      metrics: "94% accuracy, 9.4% RMSE reduction",
      github: "https://github.com/AlharthAlhajHussein/Diamond-Price-Predictions-Model",
      highlights: ["50K+ entries processed", "Automated outlier removal", "Feature optimization"]
    },
    {
      title: "Music Genre Classification",
      description: "Ensemble stacking model combining Random Forest, SVC, and KNN for genre prediction",
      tech: ["Scikit-learn", "Ensemble Methods", "K-means", "Feature Engineering"],
      metrics: "13% F1-score improvement",
      github: "https://github.com/AlharthAlhajHussein/Music-Genre-Classification-Model",
      highlights: ["14K+ tracks analyzed", "18% minority-class recall boost", "Advanced clustering"]
    }
  ];

  const skills = {
    "Programming": ["Python", "C++", "Java", "SQL", "HTML/CSS"],
    "ML/AI": ["TensorFlow", "Scikit-learn", "PyTorch", "Computer Vision", "NLP"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Power BI", "Data Analysis"],
    "Tools": ["Git", "MySQL", "VS Code", "Kaggle", "Google Colab"],
    "Frameworks": ["Django", "PyQt5", "Web Development"]
  };

  const achievements = [
    { icon: Award, title: "Kaggle Competitions", desc: "Ranked participant in multiple competitions" },
    { icon: BookOpen, title: "Problem Solving", desc: "150+ programming challenges solved" },
    { icon: Users, title: "Blue Bits Team", desc: "Authored 20+ lecture notes for 50+ students" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Alharth Alhaj Hussein
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Data Scientist & Informatics Engineer
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building end-to-end Machine Learning solutions with 5+ projects 
            demonstrating expertise in TensorFlow, Scikit-learn, and advanced data analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              5+ ML Projects
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Kaggle Competitor
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              150+ Problems Solved
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Github className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Data Scientist and Informatics Engineering student with a strong foundation 
                in Machine Learning and AI. My expertise spans from building sophisticated neural networks 
                to developing real-time applications with intuitive user interfaces.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Aleppo, Syria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>June 5, 2001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>+963 991292874</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>alharth.alhaj.hussein@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-4">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-green-50 p-2 rounded text-sm font-medium text-green-700">
                      {project.metrics}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <Badge key={i} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor's in Informatics Engineering</h3>
                    <p className="text-gray-600">Aleppo University, Aleppo</p>
                    <p className="text-sm text-gray-500">September 2020 - September 2025</p>
                    <p className="text-sm font-medium text-green-600">GPA: 80%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {["AI", "Computer Vision", "NLP", "Deep Learning", "Software Engineering"].map((course, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">Machine Learning Specialization</h3>
                    <p className="text-sm text-gray-600">Coursera - Stanford/DeepLearning.AI</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">Deep Learning Specialization</h3>
                    <p className="text-sm text-gray-600">Coursera - Stanford/DeepLearning.AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="mailto:alharth.alhaj.hussein@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="http://www.linkedin.com/in/alharth-alhaj-hussein-023417241" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://github.com/AlharthAlhajHussein?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm opacity-75">
            <div>
              <strong>Languages:</strong> Arabic (Native), English (B2)
            </div>
            <div>
              <strong>Location:</strong> Aleppo, Syria
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="text-sm opacity-75">
          © 2024 Alharth Alhaj Hussein. Built with passion for data science and machine learning.
        </p>
      </footer>
    </div>
  );
};

export default Index;
