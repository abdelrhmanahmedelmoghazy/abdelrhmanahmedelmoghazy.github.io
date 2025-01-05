document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    const projects = [
        { name: 'Project 1', description: 'Description for project 1', link: '#' },
        { name: 'Project 2', description: 'Description for project 2', link: '#' },
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors';
        projectCard.innerHTML = `
            <h3 class="text-2xl font-semibold">${project.name}</h3>
            <p class="mt-2">${project.description}</p>
            <a href="${project.link}" class="text-blue-500 hover:underline mt-2 block">View Project</a>
        `;
        projectsList.appendChild(projectCard);
    });
});
