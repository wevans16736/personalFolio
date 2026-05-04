import command from '../../config.json' assert { type: 'json' };

const createProject = (): string[] => {
  const projects: string[] = [];
  const files = `${command.projects.length} File(s)`;

  projects.push("<br>");

  command.projects.forEach((ele) => {
    const title = ele[0];
    const desc = ele[1];
    const url = ele[2];

    projects.push(`
      <div style="display: flex; gap: 16px; align-items: baseline;">
        <a href="${url}" target="_blank">${title}</a>
        <span>${desc}</span>
      </div>
    `.trim());
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  projects.push(`This list is <span class='command'>incomplete.</span> You can help by <span class='command'>expanding it.</span>`)

  return projects;
};

export const PROJECTS = createProject();
