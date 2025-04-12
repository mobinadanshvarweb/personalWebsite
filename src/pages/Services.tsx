import ServiceCart from "../components/ServiceCart";
import { FaPaintBrush } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { GrAttachment } from "react-icons/gr";
import { VscSourceControl } from "react-icons/vsc";
import { SiSpeedtest } from "react-icons/si";
const Services = () => {
  return (
    <div className="flex mx-6 w-full flex-col gap-12 ">
      <h3 className="uppercase font-bold tracking-widest text-xl">
        // Top Notch Services
      </h3>
      <div className="flex flex-wrap lg:flex-nowrap w-full justify-between gap-10">
        <ServiceCart
          title="UI Development"
          icon={<FaPaintBrush color="#767676" size={40} />}
          items={[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Bootstrap",
            "SASS",
            "MUI",
            "Headless UI",
          ]}
        />
        <ServiceCart
          title="Frontend Programming"
          icon={<IoSettingsOutline color="#767676" size={40} />}
          items={[
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Component Design",
            "State Management",
          ]}
        />
        <ServiceCart
          title=" Progressive Web Apps"
          icon={<GrAppsRounded color="#767676" size={40} />}
          items={[
            "Service Workers",
            "Offline Support",
            "Manifest Setup",
            "Add to Home Screen",
            "Performance Optimization",
          ]}
        />
      </div>
      <div className="flex w-full justify-between gap-10">
        <ServiceCart
          title="API Integration & Tools"
          icon={<GrAttachment color="#767676" size={40} />}
          items={[
            "RESTful APIs",
            "Postman",
            "Axios/Fetch",
            "Authentication",
            "Error Handling",
            "WebSocket",
          ]}
        />
        <ServiceCart
          title="Version Control"
          icon={<VscSourceControl color="#767676" size={40} />}
          items={[
            "Git Basics",
            "GitHub Workflow",
            "Branching Strategy",
            "Merge & Rebase",
            "CI/CD Basics",
          ]}
        />
        <ServiceCart
          title="Testing"
          icon={<SiSpeedtest color="#767676" size={40} />}
          items={[
            "Component Testing",
            "Unit Testing",
            "Integration Testing",
            "Debugging Tools",
            "Manual Testing",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
