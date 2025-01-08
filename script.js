document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    const projects = [
        { name: 'Your Project 1', description: 'Description for your project 1', link: '#' },
        { name: 'Your Project 2', description: 'Description for your project 2', link: '#' },
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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const message = document.getElementById('message').value;
    const phoneNumber = '+96550032370'; // Replace with your WhatsApp number (in international format)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
    document.getElementById('message').value = ''; // Clear the message field
});
