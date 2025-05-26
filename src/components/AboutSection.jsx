import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Machine Learning Engineer & Software Developer
            </h3>

            <p className="text-muted-foreground">
              I'm an undergraduate software engineering student with hands-on experience in enterprise web development at IFS and a strong passion for machine learning and AI technologies. I specialize in building intelligent systems that bridge real-world data with predictive insights.
            </p>

            <p className="text-muted-foreground">
              My recent work includes developing a real-time accident anticipation system using dashcam footage, object detection (YOLOv8), and logistic regression for intelligent airbag deployment — showcasing my ability to apply ML in impactful ways.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/public/projects/DimuthKarunarathnaCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Experience building ML models for real-time predictions using Python, Scikit-learn, and logistic regression.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Engineering</h4>
                  <p className="text-muted-foreground">
                    Built scalable UI features using Angular, TypeScript, and Cypress at IFS as an intern.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Delivered projects like a Hospital System, Fuel Queue Manager, and Diabuddies ML App with real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
