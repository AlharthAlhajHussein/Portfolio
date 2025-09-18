import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Award, BookOpen, Users, Trophy, Code, Database, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Index = () => {
  const projects = [{
    title: "Human Motion Capture System",
    description: "Real-time 2D and 3D human pose estimation desktop application with depth estimation and motion data streaming",
    tech: ["Python", "OpenCV", "MediaPipe", "YOLO", "PyQt6"],
    metrics: "Real-time processing with 3D depth estimation",
    github: "https://github.com/AlharthAlhajHussein/Human-Motion-Capture-System",
    highlights: ["Depth Anything V2 integration", "WebSocket streaming", "JSON export functionality"]
  }, {
    title: "Handwritten Digit Images Classification",
    description: "Deep CNN with data augmentation and batch normalization for handwritten digit recognition",
    tech: ["TensorFlow", "CNN", "Python", "Data Augmentation"],
    metrics: "97% accuracy achieved",
    github: "https://github.com/AlharthAlhajHussein/Handwritten-Digit-images-classification",
    highlights: ["Advanced data augmentation", "Batch normalization", "High accuracy performance"]
  }, {
    title: "Toxic Comment Classification",
    description: "Multi-label toxic comment classifier using Bi-LSTM with Attention and pre-trained GloVe embeddings",
    tech: ["TensorFlow", "Python", "LSTM", "NLP"],
    metrics: "ROC AUC: 0.977",
    github: "https://github.com/AlharthAlhajHussein/Classify-Toxic-Comment-by-Bi-LSTM-with-Attention-and-Glove-Embedding",
    highlights: ["Real-time GUI integration", "6 toxicity categories", "Advanced attention mechanism"]
  }, {
    title: "Arabic Letters Audio Recognition",
    description: "SVM-based Arabic letter classification from audio inputs with advanced feature extraction",
    tech: ["Scikit-learn", "Librosa", "Python", "SVM"],
    metrics: "63% accuracy on 1,400 samples",
    github: "https://github.com/AlharthAlhajHussein/Classifying-Arabic-Letters-From-Audio-Dataset-Using-SVM",
    highlights: ["MFCC feature extraction", "Real-time recording GUI", "Advanced audio processing"]
  }, {
    title: "Data Science Salaries Analysis",
    description: "Comprehensive EDA with interactive Power BI dashboards analyzing compensation drivers",
    tech: ["Power BI", "Python", "Data Analysis", "Visualization"],
    metrics: "5000+ salary records analyzed",
    github: "https://github.com/AlharthAlhajHussein/EDA-For-Data-Science-Job-Salaries",
    highlights: ["5+ interactive dashboards", "Experience-skill correlation", "Market insights"]
  }, {
    title: "Diamond Price Prediction",
    description: "Random Forest model with feature engineering for accurate diamond price forecasting (Applied during SHAI For AI training)",
    tech: ["Scikit-learn", "Random Forest", "Feature Engineering"],
    metrics: "94% accuracy, 9.4% RMSE reduction",
    github: "https://github.com/AlharthAlhajHussein/Diamond-Price-Predictions-Model",
    highlights: ["50K+ entries processed", "Automated outlier removal", "Feature optimization"]
  }, {
    title: "Music Genre Classification",
    description: "Ensemble stacking model combining Random Forest, SVC, and KNN for genre prediction (Applied during SHAI For AI training)",
    tech: ["Scikit-learn", "Ensemble Methods", "K-means", "Feature Engineering"],
    metrics: "13% F1-score improvement",
    github: "https://github.com/AlharthAlhajHussein/Music-Genre-Classification-Model",
    highlights: ["14K+ tracks analyzed", "18% minority-class recall boost", "Advanced clustering"]
  }];
  const skills = {
    "Languages": ["Python", "C++", "Java", "SQL", "HTML/CSS"],
    "Tools": ["Git", "VS Code", "Jupiter Notebook", "Kaggle", "Google Colab", "MySQL Workbench", "Microsoft Office"],
    "Frameworks": ["Django", "FastAPI", "TensorFlow", "Scikit-learn", "PyQt6"],
    "Models": ["YOLO", "MediaPipe", "OpenPose", "Depth Anythingv2", "BERT", "T5", "GPT-2"],
    "Domains": ["Machine Learning", "Computer Vision", "NLP", "Data Analysis"],
    "Data Preparation": ["Data cleaning", "Feature engineering", "Feature scaling", "Data normalization", "Handling imbalanced data", "Data augmentation"],
    "Data Collection & Reporting": ["Google Forms", "KOBO Toolbox", "Data analysis", "Data visualization", "Power BI", "Pandas", "Matplotlib", "Seaborn"],
    "Information Management": ["Archiving", "Documentation", "Technical support", "Data management"]
  };
  const achievements = [{
    icon: Award,
    title: "SHAI For AI Training",
    desc: "6-month intensive Data Science program"
  }, {
    icon: Trophy,
    title: "Kaggle Competitions",
    desc: "Ranked participant in multiple competitions"
  }, {
    icon: BookOpen,
    title: "Problem Solving",
    desc: "150+ programming challenges solved"
  }, {
    icon: Users,
    title: "Blue Bits Team",
    desc: "Authored 30+ lecture notes for 100+ students"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Alharth Alhaj Hussein
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Computer Vision Engineer, Data Scientist & Informatics Engineer
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">Passionate about building end-to-end Machine Learning solutions with 10+ projects demonstrating expertise in Keras and TensorFlow, Scikit-learn, and advanced data analysis.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              10+ ML Projects
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              SHAI For AI Graduate
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Kaggle Competitor
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              150+ Problems Solved
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="mailto:alharth.alhaj.hussein@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://github.com/AlharthAlhajHussein?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-col items-center md:items-start gap-8 mb-8">
                <Avatar className="h-40 w-40 ring-4 ring-blue-100 shadow-lg">
                  <AvatarImage alt="Alharth Alhaj Hussein" className="object-cover" src="/lovable-uploads/new-profile-photo.jpg" />
                  <AvatarFallback className="text-2xl">AH</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Alharth Alhaj Hussein</h3>
                  <p className="text-lg text-blue-600 font-medium">Computer Vision Engineer, Data Scientist & Informatics Engineer</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center md:text-left">I'm a passionate Data Scientist and Informatics Engineer with a strong foundation in Machine Learning and AI. Completed a comprehensive 6-month training program at SHAI For AI company, gaining expertise in data preprocessing, model selection, and fine-tuning.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">Aleppo, Syria</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">June 5, 2001</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">+963 991292874</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">alharth.alhaj.hussein@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-4">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.desc}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Professional Experience</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6 text-blue-600" />
                Data Science Training - SHAI For AI Company
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">6-Month Intensive Program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Completed comprehensive training in data science methodologies and ML systems.
                  Gained hands-on experience with the complete machine learning pipeline from data preprocessing to model optimization.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Core Learning Areas:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Raw data preprocessing and feature engineering
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Model selection and evaluation techniques
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Hyperparameter tuning and optimization
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Model optimization and system integration
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Applied Projects:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        Music Genre Classification Model
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        Diamond Price Prediction Model
                      </li>
                    </ul>
                    <h4 className="font-semibold text-gray-800 mb-3 mt-4">Technologies Mastered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"].map((tech, i) => <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>)}
                    </div>
                    <div className="bg-green-50 p-2 rounded text-sm font-medium text-green-700">
                      {project.metrics}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>)}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => <Badge key={i} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-6">
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
                    <p className="text-sm font-medium text-green-600">GPA: 83%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {["AI", "Computer Vision", "NLP", "Deep Learning", "Software Engineering"].map((course, i) => <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>)}
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
                    <h3 className="font-semibold">SHAI For AI Data Science Training</h3>
                    <p className="text-sm text-gray-600">6-Month Professional Program</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">Machine Learning Specialization</h3>
                    <p className="text-sm text-gray-600">Coursera - Stanford/DeepLearning.AI</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">Deep Learning Specialization</h3>
                    <p className="text-sm text-gray-600">Coursera - Stanford/DeepLearning.AI</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold">Generative AI Specialization</h3>
                    <p className="text-sm text-gray-600">Coursera - Stanford/DeepLearning.AI</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold">Blue Bits Volunteering Certificate</h3>
                    <p className="text-sm text-gray-600">Educational Content Creation</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href="https://drive.google.com/drive/folders/1-62BO4PApt9Z2hCGCphawZtZnHpraYpj?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificates
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href="/lovable-uploads/Alharth_Alhaj_Hussein_CV.pdf" download="Alharth_Alhaj_Hussein_CV.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Work */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Volunteer Work</h2>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Blue Bits Team - Educational Volunteer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                More than one year of volunteering with Blue Bits Team, contributing to educational initiatives 
                by creating comprehensive learning materials to support fellow students in their academic journey.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Key Contributions:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Authored 30+ summarized lecture notes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Improved study experience for 100+ students
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    Enhanced comprehension of complex technical subjects
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
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
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://www.kaggle.com/alharthalhajhussein" target="_blank" rel="noopener noreferrer">
                <Trophy className="mr-2 h-4 w-4" />
                Kaggle
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://codeforces.com/profile/AlharthAlhajHossein" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" />
                Codeforces
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
    </div>;
};
export default Index;