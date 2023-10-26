// Define an array of KJV verses
const kjvVerses = [
    "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    // Add more verses here
];

function getRandomVerse() {
    // Get a random verse from the array
    const randomIndex = Math.floor(Math.random() * kjvVerses.length);
    const randomVerse = kjvVerses[randomIndex];

    // Display the random verse
    document.getElementById("verse").textContent = randomVerse;
}

// Initialize with a random verse on page load
getRandomVerse();
