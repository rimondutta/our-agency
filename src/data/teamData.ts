/**
 * @deprecated This static team data has been superseded by the dynamic team
 * management API at /api/public/team (powered by the User model). The
 * public /team page now reads from the database via the `useTeam` hook.
 * This file is kept temporarily for legacy imports and will be removed
 * once all consumers are verified on the dynamic source. Do not add new
 * imports of `teamData` / `TeamMemberData` — they will not reflect admin
 * updates.
 */

export interface TeamMemberData {
  id: number;
  name: string;
  designation: string;
  photo: string;
  bio: string;
  skills: string[];
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    facebook?: string;
  };
}

const teamData: TeamMemberData[] = [
  {
    id: 1,
    name: "Rigan Dutta",
    designation: "App Developer",
    photo: "/assets/img/team/rigan-dutta.jpg",
    bio: "Skilled app developer passionate about building modern, user-friendly, and high-performance applications. Experienced in creating responsive interfaces, integrating APIs, and delivering smooth digital experiences with a focus on quality and innovation.",
    skills: ["React Native", "Flutter", "JavaScript", "UI/UX Design", "API Integration"],
    email: "rigandutta@gmail.com",
    phone: "+880 1879-881015",
    location: "Chattogram, Bangladesh",
    social: {
      linkedin: "",
      instagram: "",
      github: "",
    },
  },
  {
    id: 2,
    name: "Rimon Dutta",
    designation: "Cloud Engineer",
    photo: "/assets/img/team/rimon-dutta.jpg",
    bio: "Dedicated cloud engineer experienced in building, managing, and optimizing scalable cloud infrastructure. Skilled in cloud deployment, server management, automation, and ensuring secure, reliable, and high-performance systems for modern applications.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux Administration"],
    email: "info.rimondutta@gmail.com",
    phone: "+880 1404-587727",
    location: "Chattogram, Bangladesh",
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/rimon_dutta.py",
      github: "",
    },
  },
  {
    id: 3,
    name: "Joy Devnath",
    designation: "Full Stack Developer",
    photo: "/assets/img/team/joy devnath.png",
    bio: "Creative full stack developer with a passion for building end-to-end web solutions. Proficient in both frontend and backend technologies, delivering scalable and maintainable applications that solve real-world business challenges.",
    skills: ["Node.js", "React", "MongoDB", "Express.js", "TypeScript"],
    email: "info.mge@gmail.com",
    phone: "+880 1913-801447",
    location: "Chattogram, Bangladesh",
    social: {
      linkedin: "",
      instagram: "",
      github: "",
    },
  },
  {
    id: 4,
    name: "Fahim Ahmed",
    designation: "Digital Marketing Specialist",
    photo: "/assets/img/team/fahim 1.png",
    bio: "Results-driven digital marketing specialist focused on driving brand growth through data-backed strategies. Expert in SEO, social media marketing, content strategy, and paid advertising campaigns that deliver measurable ROI.",
    skills: ["SEO", "Social Media Marketing", "Google Ads", "Content Strategy", "Analytics"],
    email: "info.mge@gmail.com",
    phone: "+880 1913-801447",
    location: "Chattogram, Bangladesh",
    social: {
      linkedin: "",
      instagram: "",
      facebook: "",
    },
  },
  {
    id: 5,
    name: "Anup Das",
    designation: "Project Manager",
    photo: "/assets/img/team/anupdada 1.png",
    bio: "Experienced project manager with a proven track record of delivering projects on time and within budget. Expert in agile methodologies, team coordination, and client communication, ensuring seamless execution from concept to deployment.",
    skills: ["Agile/Scrum", "Team Leadership", "Client Relations", "Strategic Planning", "Risk Management"],
    email: "info.mge@gmail.com",
    phone: "+880 1913-801447",
    location: "Chattogram, Bangladesh",
    social: {
      linkedin: "",
      instagram: "",
    },
  },
];

export default teamData;
