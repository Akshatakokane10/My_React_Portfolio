import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const HeroSection = ({
  name = "AKSHATA KOKANE",
  title = "Full Stack Web Developer",
  profileImage = "/akshataprofile.jpg",
  socialLinks = {
    linkedin: "https://linkedin.com/in/akshata-kokane-298ba1288",
    github: "https://github.com/Akshatakokane10",
    email: "mailto:akshatakokane23@gmail.com",
  },
}: HeroSectionProps) => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#f8f5f2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground">
              {title}
            </p>
           <div className="flex items-center gap-4 pt-4">
  <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-primary/10">
    <a
      href={socialLinks.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <Linkedin className="h-5 w-5" />
    </a>
  </Button>

  <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-primary/10">
    <a
      href={socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
    >
      <Github className="h-5 w-5" />
    </a>
  </Button>

  <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-primary/10">
    <a
      href={socialLinks.email}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email Contact"
    >
      <Mail className="h-5 w-5" />
    </a>
  </Button>
</div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <Avatar className="w-full h-full">
                <AvatarImage
  src="/akshataprofile.jpg"
  alt="Profile picture"
  className="object-cover w-full h-full rounded-2xl"
/>

                <AvatarFallback className="bg-primary/10 text-4xl font-serif">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
