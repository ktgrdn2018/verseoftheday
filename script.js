const kjvVerses = [
    "For the which cause I also suffer these things: nevertheless I am not ashamed: for I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day. - 2 Timothy 1:12",
    "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. - Psalms 23:4",
    "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. - Acts 2:38",
    "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. - John 13:34",
    "Who knoweth not in all these that the hand of the LORD hath wrought this? - Job 12:9",
    "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works. - 2 Timothy 3:16-17",
    "While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease. - Genesis 8:22",
    "All things were made by him; and without him was not any thing made that was made. - John 1:13",
    "Wealth gotten by vanity shall be diminished: but he that gathereth by labour shall increase. - Proverbs 13:11",
    "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God. - Romans 12:2",
    "Trust in the LORD with all thine heart; and lean not unto thine own understanding. - Proverbs 3:5",
    "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away. - Revelation 21:4",
    "Truly my soul waiteth upon God: from him cometh my salvation. He only is my rock and my salvation; he is my defence; I shall not be greatly moved. - Psalms 62:1",
    "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. - 2 Corinthians 12:9",
    "Train up a child in the way he should go: and when he is old, he will not depart from it. - Proverbs 22:6",
    "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. - Matthew 28:18",
    "To every thing there is a season, and a time to every purpose under the heaven: A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted; A time to kill, and a time to heal; a time to break down, and a time to build up; A time to weep, and a time to laugh; a time to mourn, and a time to dance; A time to cast away stones, and a time to gather stones together; a time to embrace, and a time to refrain from embracing; A time to get, and a time to lose; a time to keep, and a time to cast away; A time to rend, and a time to sew; a time to keep silence, and a time to speak; A time to love, and a time to hate; a time of war, and a time of peace. - Ecclesiastes 3:1-8",
    "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction. - Proverbs 1:7",
    // Add more verses here
];

const images = [
    "image1.jpg",
    "image2.jpg",
    // Add more image URLs here
];

function getRandomVerseAndImage() {
    const randomVerseIndex = Math.floor(Math.random() * kjvVerses.length);
    const randomVerse = kjvVerses[randomVerseIndex];

    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomImageIndex];

    document.getElementById("verse-text").textContent = randomVerse;
    document.getElementById("image-element").src = randomImage;
}

// Display a random verse and image when the page loads
getRandomVerseAndImage();

// Add an event listener to the button
document.getElementById("new-verse-image-button").addEventListener("click", getRandomVerseAndImage);
