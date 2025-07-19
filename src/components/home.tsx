import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#333333]">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <HeroSection
            name="AKSHATA KOKANE"
            title="Full Stack Web Developer"
            profileImage="IMG-20241103-WA0170.jpg"
            socialLinks={[
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/akshata-kokane-298ba1288",
              },
              { name: "GitHub", url: "https://github.com/Akshatakokane10" },
              { name: "Email", url: "mailto:akshatakokane23@gmail.com" },
            ]}
          />
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <ProjectsSection
            title="Recent Work / Projects"
            projects={[
              {
                id: "1",
                title: "Crime Predictor by Text",
                description:
                  "Built using Natural Language Processing to analyze FIRs and predict crime categories. Python + ML pipeline with accuracy of 90%.",
                imageUrl:
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
                link: "https://github.com/Akshatakokane10/Crime_Predictor_India",
              },
              {
                id: "2",
                title: "Spotify Clone (Music_Player)",
                description:
                  "HTML, CSS, and JavaScript-based music player with playlist, QR code login, and premium backend functionality.",
                imageUrl:
                  "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80",
                link: "https://drive.google.com/drive/folders/1dcti2ZwERRJEX4VFyrddiIsP_dKmTGq6?usp=sharing",
              },
              {
                id: "3",
                title: "Foodify – WordPress Food Website",
                description:
                  "A dynamic food blog and restaurant site built with WordPress. Features include blog posts, table booking, and elegant food gallery.",
                imageUrl:
                  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
                link: "http://deliciousfood.liveblog365.com/",
              },
              {
                id: "4",
                title: "Portfolio Website (This One!)",
                description:
                  "Personal portfolio website. Hosted, responsive, and optimized.",
                imageUrl:
                  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
                link: "#",
              },
            ]}
          />
        </section>

        {/* Experience Section (Education, Certifications, Internships, Achievements) */}
        <section className="mb-16">
          <ExperienceSection
            education={[
              {
                degree:
                  "Bachelor of Engineering (B.E.) – Information Technology",
                institution: "MET BKC Institute of Engineering, Nashik",
                period: "2022 – 2026",
              },
              {
                degree: "Higher Secondary (HSC) – Science Stream (CBSE)",
                institution: "Kendriya Vidyalaya No. 1, Devlali, Nashik",
                period: "2020 – 2022",
              },
              {
                degree: "Secondary School (SSC) – CBSE",
                institution: "Kendriya Vidyalaya No. 1, Devlali, Nashik",
                period: "2009 – 2020",
              },
            ]}
            certifications={[
              {
                title: "Web Development – Udemy",
                description: "Frontend + Backend Web Dev Course",
                link: "https://drive.google.com/file/d/1QRq8XBZXYX8oHKWCfA-kWTnWK-kg1qtK/view?usp=sharing",
              },
              {
                title: "Android App Development Bootcamp – GDSC MET",
                description: "Built and deployed Android apps",
                link: "https://drive.google.com/file/d/1Q8VTcmYaIXnLq9vTe7t2QSMOMb2bv7AP/view?usp=sharing",
              },
              {
                title: "Data Analytics – Microsoft Learn",
                description: "Analyzed datasets using Excel, Power BI",
                link: "https://learn.microsoft.com/en-us/users/akshatakokane-7162/achievements/n2x4u8gf",
              },
              {
                title: "Java, C++, and PHP – Udemy",
                description: "Programming fundamentals and real-world examples",
                link: "https://drive.google.com/file/d/1QxIakZuKqYrA6BxUNnvqqvwQZvCgMo0u/view?usp=sharing",
              },
            ]}
            internships={[
              {
                title: "AI/ML Virtual Internship – Eduskills (AICTE)",
                project: "Project: Crime Prediction using NLP",
                details: [
                  "Built intelligent models to predict crime categories using FIR text",
                  "Techniques used: NLP, Data Cleaning, Classification",
                ],
                certificateLink:
                  "https://drive.google.com/file/d/1Q2xVeDA5_NG6_NPevNWnrnF1n2pZaGpS/view?usp=sharing",
              },
              {
                title:
                  "Full Stack Web Development Internship – Netleap IT Training & Solutions",
                project: "Project: Music Player Website (Spotify Clone)",
                details: [
                  "Created music player UI using HTML, CSS, JavaScript, and database.json",
                  "Enabled playlist playback, pause/resume, song navigation",
                ],
                certificateLink:
                  "https://drive.google.com/file/d/1AQg0KURL-OX1GLGdOZKUwLFLjoW3ZhAW/view?usp=sharing",
              },
              {
                title: "Data Science Master Internship – Eduskills (AICTE)",
                project: "",
                details: [
                  "Gained knowledge in Python, Pandas, Matplotlib, Scikit-learn",
                  "Built models and handled real-world datasets",
                ],
                certificateLink:
                  "https://drive.google.com/file/d/1t1PiVzCGt45wZoXTNH_R9pF8U9tEUqmP/view?usp=sharing",
              },
              {
                title: "Techsaksham Internship",
                project: "",
                details: [
                  "Participated in hands-on project learning",
                  "Worked on real-world challenges using modern tech tools",
                ],
                certificateLink:
                  "https://drive.google.com/file/d/1J8Fz4hJ_hmgzOKdeyatiwbjqg0k5EubV/view?usp=sharing",
              },
            ]}
            achievements={[
              {
                title: "Engineering Mathematics 3 Topper",
                description: "Scored 100/100 in MET",
                link: "https://drive.google.com/drive/folders/17eytcBhkuceFDGbIIFl4qsV7fMOFWL7p?usp=sharing",
              },
              {
                title: "Appreciation Letter from IT Department",
                description: "Third Year Sem1 Topper",
                link: "https://drive.google.com/file/d/1IMtUXogu7LTdv3epYUU01o_R3MA35tQe/view?usp=sharing",
              },
            ]}
          />
        </section>

        {/* Footer / Contact CTA */}
        <footer className="mt-20 py-10 text-center">
          <Separator className="mb-10" />
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl mb-4">
              Let's build something awesome!
            </h2>
            <p className="text-lg mb-6">
              I'm open to freelance, internships, and Jobs
            </p>
            <Button className="bg-[#333] hover:bg-[#555] text-white px-8 py-6 rounded-full text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
