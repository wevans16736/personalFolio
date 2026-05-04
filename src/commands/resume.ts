const resumeUrl = "https://your-domain.com/resume.pdf"; // or GitHub Pages path

export const createResume = (): string[] => {
  const resume: string[] = [];

  resume.push("<br>");

  resume.push(
    `<a href="${resumeUrl}" target="_blank"><span class='command'>Wyatt Evans Resume</span></a>`
  );

  resume.push("<br>");

  return resume;
};
