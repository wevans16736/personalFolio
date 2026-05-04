const resumeUrl = "https://drive.google.com/file/d/1SwFWOdl5X5-GCUFhbjdeafMSi5vrQt7w/view?usp=sharing"; // or GitHub Pages path

export const createResume = (): string[] => {
  const resume: string[] = [];

  resume.push("<br>");

  resume.push(
    `<a href="${resumeUrl}" target="_blank"><span class='command'>Wyatt Evans Resume</span></a>`
  );
  resume.push("Updated 04 May 2026");

  resume.push("<br>");

  return resume;
};
