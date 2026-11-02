import command from '../../config.json' assert { type: 'json' };

const createCoursework = (): string[] => {
  const coursework: string[] = [];
  const files = `${command.coursework.length} File(s)`;

  coursework.push("<br>");

  command.coursework.forEach((ele) => {
    const title = ele[0];
    const desc = ele[1];
    const url = ele[2];

    coursework.push(`
      <div style="display: flex; gap: 16px; align-items: baseline;">
        <a href="${url}" target="_blank">${title}</a>
        <span>${desc}</span>
      </div>
    `.trim());
  });

  coursework.push("<br>");
  coursework.push(files);
  coursework.push("<br>");
  coursework.push(`This list is <span class='command'>incomplete.</span>`);

  return coursework;
};

export const COURSEWORK = createCoursework();
