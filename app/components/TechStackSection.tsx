"use client";

import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string | null;
}

const DEFAULT_ICON = "devicon-devicon-plain colored";

// Custom organized pyramid representing our tech stack (9 -> 8 -> 7 -> 4 -> 3)
const techStack: TechItem[][] = [
  // Row 1 - 9 items (Core languages & web frameworks)
  [
    { name: "Angular", icon: "devicon-angular-plain colored", url: "https://angular.dev" },
    { name: "React", icon: "devicon-react-original colored", url: "https://react.dev" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", url: "https://typescriptlang.org" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML", icon: "devicon-html5-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "devicon-css3-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bash", icon: "devicon-bash-plain colored", url: "https://www.gnu.org/software/bash/" },
    { name: "Next.js", icon: "devicons devicons-nextjs-icon colored", url: "https://nextjs.org" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", url: "https://getbootstrap.com" },
  ],
  // Row 2 - 8 items (Libraries, reactive primitives & APIs)
  [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", url: "https://nodejs.org" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", url: "https://tailwindcss.com" },
    { name: "RxJS", icon: "devicon-rxjs-plain colored", url: "https://rxjs.dev" },
    { name: "Signals", icon: "devicons devicons-signal", url: "https://angular.dev/guide/signals" },
    { name: "NgRx", icon: "devicon-ngrx-plain colored", url: "https://ngrx.io" },
    { name: "Redux", icon: "devicon-redux-original colored", url: "https://redux.js.org" },

    { name: "GraphQL", icon: "devicons devicons-graphql", url: "https://graphql.org" },
  ],
  // Row 3 - 5 items (AI models, prompt engineering, agentic workflows, architecture)
  [
    { name: "Claude", icon: "devicons devicons-claude-code colored", url: "https://anthropic.com" },
    { name: "Codex", icon: "devicons devicons-openai-icon", url: "https://openai.com/blog/openai-codex" },
    { name: "Copilot", icon: "devicons devicons-github-copilot", url: "https://github.com/features/copilot" },
    { name: "Agentic", icon: DEFAULT_ICON, url: null },
    { name: "Micro-frontends", icon: "devicons devicons-webpack", url: "https://micro-frontends.org" },
    { name: "Material", icon: "devicons devicons-material-ui", url: "https://material.angular.io" },
  ],
  // Row 4 - 4 items (Version control, IDE & monorepos)
  [
    { name: "Git", icon: "devicon-git-plain colored", url: "https://git-scm.com" },
    { name: "GitHub", icon: "devicon-github-original colored", url: "https://github.com" },
    { name: "VS Code", icon: "devicon-vscode-plain colored", url: "https://code.visualstudio.com" },
    { name: "NX Monorepos", icon: "devicons devicons-nx", url: "https://nx.dev" },
  ],
  // Row 5 - 3 items (Design, API testing & pipelines)
  [
    { name: "Figma", icon: "devicons devicons-figma", url: "https://figma.com" },
    { name: "Postman", icon: "devicons devicons-postman", url: "https://postman.com" },
    { name: "CI/CD", icon: "devicons devicons-github-actions", url: "https://github.com/features/actions" },
  ],
];

export default function TechStackSection() {
  return (
    <section id="skills" className="scroll-margin techstack-new">
      {/* Video Background playing the black hole animation */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) =>
                tech.url ? (
                  <a
                    key={techIndex}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                  >
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </a>
                ) : (
                  <div
                    key={techIndex}
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                    style={{ cursor: "default" }}
                  >
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
