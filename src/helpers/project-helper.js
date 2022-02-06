export const paginateProjects = (projects) => {
  const paginatedProjects = [];
  for (let i = 0; i<projects.length; i+=4) paginatedProjects.push(projects.slice(i, i + 4));
  return paginatedProjects;
}
