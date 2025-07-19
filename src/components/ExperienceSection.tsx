import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  Trophy,
} from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  certificateUrl: string;
}

interface InternshipItem {
  role: string;
  company: string;
  project?: string;
  points: string[];
  certificateUrl: string;
}

interface AchievementItem {
  title: string;
  link?: string;
}

interface ExperienceSectionProps {
  educationItems?: EducationItem[];
  certificationItems?: CertificationItem[];
  internshipItems?: InternshipItem[];
  achievementItems?: AchievementItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  educationItems = [
    {
      degree: "Bachelor of Engineering (B.E.) – Information Technology",
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
  ],
  certificationItems = [
    {
      title: "Web Development",
      issuer: "Udemy",
      description: "Frontend Web Dev Course",
      certificateUrl:
        "https://drive.google.com/file/d/1QRq8XBZXYX8oHKWCfA-kWTnWK-kg1qtK/view?usp=sharing",
    },
    {
      title: "Android App Development Bootcamp",
      issuer: "GDSC MET",
      description: "Built and deployed Android apps",
      certificateUrl:
        "https://drive.google.com/file/d/1Q8VTcmYaIXnLq9vTe7t2QSMOMb2bv7AP/view?usp=sharing",
    },
    {
      title: "Data Analytics",
      issuer: "Microsoft Learn",
      description: "Analyzed datasets using Excel, Power BI",
      certificateUrl:
        "https://learn.microsoft.com/en-us/users/akshatakokane-7162/achievements/n2x4u8gf",
    },
    {
      title: "Java, C++, and PHP",
      issuer: "Udemy",
      description: "Programming fundamentals and real-world examples",
      certificateUrl:
        "https://drive.google.com/file/d/1QxIakZuKqYrA6BxUNnvqqvwQZvCgMo0u/view?usp=sharing",
    },
  ],
  internshipItems = [
    {
      role: "AI/ML Virtual Internship",
      company: "Eduskills (AICTE)",
      project: "Crime Prediction using NLP",
      points: [
        "Built intelligent models to predict crime categories using FIR text",
        "Techniques used: NLP, Data Cleaning, Classification",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1Q2xVeDA5_NG6_NPevNWnrnF1n2pZaGpS/view?usp=sharing",
    },
    {
      role: "Full Stack Web Development Internship",
      company: "Netleap IT Training & Solutions",
      project: "Music Player Website (Spotify Clone)",
      points: [
        "Created music player UI using HTML, CSS, JavaScript, and database.json",
        "Enabled playlist playback, pause/resume, song navigation",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1AQg0KURL-OX1GLGdOZKUwLFLjoW3ZhAW/view?usp=sharing",
    },
    {
      role: "Data Science Master Internship",
      company: "Eduskills (AICTE)",
      points: [
        "Gained knowledge in Python, Pandas, Matplotlib, Scikit-learn",
        "Built models and handled real-world datasets",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1t1PiVzCGt45wZoXTNH_R9pF8U9tEUqmP/view?usp=sharing",
    },
    {
      role: "Techsaksham Internship",
      company: "",
      points: [
        "Participated in hands-on project learning",
        "Worked on real-world challenges using modern tech tools",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1J8Fz4hJ_hmgzOKdeyatiwbjqg0k5EubV/view?usp=sharing",
    },
  ],
  achievementItems = [
    {
      title: "Engineering Mathematics 3 Topper - Scored 100/100 in MET",
      link: "https://drive.google.com/drive/folders/17eytcBhkuceFDGbIIFl4qsV7fMOFWL7p?usp=sharing",
    },
    {
      title:
        "Appreciation Letter from IT Department for Third Year Sem1 Topper",
      link: "https://drive.google.com/file/d/1IMtUXogu7LTdv3epYUU01o_R3MA35tQe/view?usp=sharing",
    },
  ],
}) => {
  return (
    <div className="w-full bg-background py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-serif font-semibold">Education</h2>
          </div>

          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-primary/20 pb-6 last:pb-0"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-medium">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <Badge variant="outline" className="mt-1">
                    {item.period}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-serif font-semibold">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card h-full"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{item.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Internship Experience Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-serif font-semibold">
              Internship Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card h-full"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-serif">
                        {item.role}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {item.company}
                      </CardDescription>
                    </div>
                  </div>
                  {item.project && (
                    <div className="mt-2">
                      <Badge variant="secondary" className="font-medium">
                        Project: {item.project}
                      </Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-5 space-y-1">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-serif font-semibold">Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  {item.link && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienceSection;
