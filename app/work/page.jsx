"use client";

import { 
  FaJs,
  FaFigma,
  FaDocker,
  FaPython,
  FaJava,
  FaUnity,
} from "react-icons/fa";

import { 
  SiTailwindcss, SiNextdotjs,
} from "react-icons/si";

//about me data
const allProjects = {
  title: "All Projects",
  description: "A compilation of all type of projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Manolo Iniguez"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+593) 96 189 5248"
    },
    {
      fieldName: "Experience",
      fieldValue: "800+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ecuadorian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Email",
      fieldValue: "iniguezms@hotmail.com"
    },
    {
      fieldName: "Otro",
      fieldValue: "Otra cosa cool"
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "mi experiencia bla bla bla mi experiencia bla bla bla mi experiencia bla bla bla mi experiencia bla bla bla",
  items: [
    {
      company: "LIFE",
      position: "Tipaso",
      duration: "2000 - Present",
    },
    {
      company: "TELCONET LATAM",
      position: "Intern",
      duration: "2022 - 2023",
    },
    {
      company: "University San Franscisco",
      position: "Teaching Assistant",
      duration: "2023 - 2024",
    },
    {
      company: "General Contralory of the State",
      position: "Project Management Developer",
      duration: "2024 - Present",
    },
    
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "mi educacion bla bla bla mi educacion bla bla bla mi educacion bla bla bla mi educacion bla bla bla",
  items: [
    {
      institution: "Streets, Carcelen City",
      degree: "About life, ganster shit",
      duration: "2000 - Present",
    },
    {
      institution: "Julius West School, United States",
      degree: "Middle School",
      duration: "2012 - 2013",
    },
    {
      institution: "Colegio San Gabriel, Ecuador",
      degree: "High School",
      duration: "2011 - 2014",
    },
    {
      institution: "Bachillerato Patria, Colombia",
      degree: "High School",
      duration: "2014 - 2016",
    },
    {
      institution: "Instituto Politecnico de Leiria, Portugal",
      degree: "University",
      duration: "2017 - 2019",
    },
    {
      institution: "Universidad San Franscisco, Ecuador",
      degree: "University",
      duration: "2019 - 2023",
    },
    
  ]
};

//skills data
const skills = {
  title: 'My skills',
  description: "mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla",
  skillList: [
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <FaUnity/>,
      name: "Unity",
    },{
      icon: <FaJava/>,
      name: "Java",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <FaDocker/>,
      name: "Docker",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    
    
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ScrollArea} from '@/components/ui/scroll-area'
import {animate, motion} from 'framer-motion'
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

const Work = () => {
  return (
  <motion.div 
    initial = {{ opacity: 0}}
    animate = {{
      opacity: 1,
      transition: {
        delay:0.3, 
        duration: 1, 
        ease: "easeIn"
      },
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="allProjects" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="allProjects">All Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full">

          {/* all projects */}
          <TabsContent value="allProjects" className ="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{allProjects.title}</h3>
            <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">{allProjects.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              <ExpandableCardDemo/>
            </ul>
          </div>
          </TabsContent>

          {/* experience */}
          <TabsContent value="experience" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <ExpandableCardDemo/>
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          {/* education */}
          <TabsContent value="education" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <ExpandableCardDemo/>
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          {/* skills */}
          <TabsContent value="skills" className ="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <ExpandableCardDemo/>
                </ul>
              </ScrollArea>
            </div>

          </TabsContent>
        </div>


      </Tabs>
    </div>
    </motion.div>
  );
}

export default Work