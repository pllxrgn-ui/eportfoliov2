import type { IconType } from "react-icons";
import type { CSSProperties } from "react";
import {
  SiCanva,
  SiCisco,
  SiCplusplus,
  SiExpo,
  SiFigma,
  SiHuggingface,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiSharp,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { BrainCircuit, GitBranch, Network, TableProperties } from "lucide-react";
import { skillGroups } from "../data/portfolio";

const brandIconMap: Partial<Record<string, IconType>> = {
  "React JS": SiReact,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Expo: SiExpo,
  Figma: SiFigma,
  Canva: SiCanva,
  "Node JS": SiNodedotjs,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  MySQL: SiMysql,
  Java: SiOpenjdk,
  Python: SiPython,
  "C++": SiCplusplus,
  "C#": SiSharp,
  "Hugging Face": SiHuggingface,
  TensorFlow: SiTensorflow,
  "Raspberry Pi": SiRaspberrypi,
  CCNA: SiCisco,
};

const fallbackIconMap: Partial<Record<string, typeof BrainCircuit>> = {
  SQL: TableProperties,
  "Data Structures": GitBranch,
  Algorithms: BrainCircuit,
  LLMs: BrainCircuit,
  NLP: Network,
};

const professionalSkills = new Set([
  "Open-minded",
  "Accountable",
  "Adaptable",
  "Growth-oriented",
  "Organized",
]);

const skillColorMap: Partial<Record<string, string>> = {
  "React JS": "#61dafb",
  JavaScript: "#f7df1e",
  "Tailwind CSS": "#38bdf8",
  Expo: "#ffffff",
  Figma: "#a259ff",
  Canva: "#00c4cc",
  "Node JS": "#5fa04e",
  Supabase: "#3ecf8e",
  PostgreSQL: "#4169e1",
  Prisma: "#2d3748",
  MySQL: "#4479a1",
  SQL: "#f4d184",
  Java: "#f89820",
  Python: "#3776ab",
  "C++": "#00599c",
  "C#": "#9b4f96",
  "Data Structures": "#7cbf8f",
  Algorithms: "#f4d184",
  LLMs: "#ffcc4d",
  "Hugging Face": "#ffcc4d",
  NLP: "#7cbf8f",
  TensorFlow: "#ff6f00",
  "Raspberry Pi": "#c51a4a",
  CCNA: "#1ba0d7",
};

function SkillItem({ skill }: { skill: string }) {
  const BrandIcon = brandIconMap[skill];
  const FallbackIcon = fallbackIconMap[skill] ?? BrainCircuit;
  const isProfessional = professionalSkills.has(skill);

  return (
    <span
      className={isProfessional ? "skill-marquee-item professional" : "skill-marquee-item"}
      style={{ "--skill-color": skillColorMap[skill] } as CSSProperties}
    >
      {isProfessional ? (
        <span>{skill}</span>
      ) : (
        <>
          <span className="skill-brand-icon" aria-hidden="true">
            {BrandIcon ? <BrandIcon size={30} /> : <FallbackIcon size={30} strokeWidth={1.8} />}
          </span>
          <span className="sr-only">{skill}</span>
        </>
      )}
    </span>
  );
}

function buildLoopedSkills(skills: string[]) {
  return Array.from({ length: 6 }, () => skills).flat();
}

export function SkillCarousel() {
  return (
    <div className="skill-carousel" aria-label="Skill stack carousel">
      {skillGroups.map((group, groupIndex) => {
        const repeatedSkills = buildLoopedSkills(group.skills);

        return (
          <section className="skill-marquee-group" key={group.title}>
            <div className="skill-marquee-heading">
              <h3>{group.title}</h3>
            </div>
            <div className="skill-marquee-window">
              <div
                className={groupIndex % 2 === 0 ? "skill-marquee-track" : "skill-marquee-track reverse"}
              >
                {repeatedSkills.map((skill, index) => (
                  <SkillItem skill={skill} key={`${group.title}-${skill}-${index}`} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
