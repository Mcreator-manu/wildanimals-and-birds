// Check if the user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html'; // Redirect to login page if not logged in
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Remove login state and redirect to login page
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});

// Updated animal data with working image URLs (Placeholder images for testing)
const animals = [
    {
        name: "Lion",
        image: "https://via.placeholder.com/250x150.png?text=Lion", // Placeholder image
        description: "Lions are large wild cats native to Africa. Known as the 'king of the jungle'."
    },
    {
        name: "Eagle",
        image: "https://via.placeholder.com/250x150.png?text=Eagle", // Placeholder image
        description: "Eagles are large birds of prey found in North America and other parts of the world."
    },
    {
        name: "Elephant",
        image: "https://via.placeholder.com/250x150.png?text=Elephant", // Placeholder image
        description: "Elephants are the largest land animals, known for their intelligence and social behavior."
    },
    {
        name: "Parrot",
        image: "https://via.placeholder.com/250x150.png?text=Parrot", // Placeholder image
        description: "Parrots are colorful birds known for their ability to mimic sounds and speech."
    },
    {
        name: "Giraffe",
        image: "https://via.placeholder.com/250x150.png?text=Giraffe", // Placeholder image
        description: "Giraffes are the tallest land animals with long necks and legs, native to Africa."
    },
    {
        name: "Penguin",
        image: "https://via.placeholder.com/250x150.png?text=Penguin", // Placeholder image
        description: "Penguins are flightless birds known for their distinctive black and white feathers."
    },
    {
        name: "Tiger",
        image: "https://via.placeholder.com/250x150.png?text=Tiger", // Placeholder image
        description: "Tigers are powerful big cats, native to Asia, with distinct orange fur and black stripes."
    },
    {
        name: "Koala",
        image: "https://via.placeholder.com/250x150.png?text=Koala", // Placeholder image
        description: "Koalas are marsupials native to Australia, known for their love of eucalyptus leaves."
    }
];

// Function to display animal cards
function displayAnimals() {
    const animalList = document.getElementById('animal-list');
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('animal-card');
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3 class="animal-name">${animal.name}</h3>
            <p class="animal-description">${animal.description}</p>
        `;
        animalList.appendChild(card);
    });
}

// Call the function to display the animals on page load
displayAnimals();
