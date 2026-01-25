// Centralized stats data - use this everywhere to maintain consistency
export const companyStats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: new Date().getFullYear() - 2009, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Happy Families" },
  { value: 50, suffix: "+", label: "Expert Team Members" },
];

// For pages that need icon versions
export const companyStatsWithDefaults = {
  projectsCompleted: 50,
  yearsExperience: new Date().getFullYear() - 2009,
  happyFamilies: 300,
  expertTeamMembers: 50,
};
