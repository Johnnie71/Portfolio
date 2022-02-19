import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
	title: "Johnnie G", // e.g: 'Name | Developer'
	lang: "en", // e.g: en, es, fr, jp
	description: "Johnnie G Software Engineer", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
	title: "",
	name: "Johnnie Gonzalez",
	subtitle: "Welcome to my World!!!",
	cta: "",
};

// ABOUT DATA
export const aboutData = {
	img: "profile.jpg",
	paragraphOne:
		"I'm a software engineer with an eye for design and a love for all that is eco-friendly. I love spending time with family and friends. Love to drive with the music blasting in hopes the person next to me is Shazaming my song 😂. Other than that I love to create, learn new material, and meet new people from around the world.",
	paragraphTwo:
		"With a background in architectural design, and a passion for sustainability, I have discovered programming as the perfect vehicle for leading the way toward a greener future. With an estimated 7.26 billion people (91% of the world population) owning a smartphone in 2022, access to a more sustainable world is now at our fingertips.",
	paragraphThree:
		"Please feel free to explore my page and learn about my projects... 😀",
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: "/images/ChatApp.gif",
		title: "We Chat",
		info: "A responsive chat application that mimics chat services such as Slack or Microsoft Teams. Enabling users to create groups and have individual chats.",
		info2:
			"Created with Node.js, React and Stream API while using Twilio to send sms notifications.",
		repo: "https://github.com/Johnnie71/RM-Client", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "/images/EZ-GIF.gif",
		title: "E-Z Task",
		info: "A clean and simple single-page CRUD application for note taking.",
		info2:
			"Utilized Ruby on Rails, Active Record in backend. Vanilla JavaScript in frontend.",
		url: "https://www.loom.com/share/00d67a6c4a7c4d5b9d67fd5ff7fcd8c9",
		repo: "https://github.com/Johnnie71/EZ-Task-frontend", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "/images/Eco-Demo-Gif.gif",
		title: "Eco Share",
		info: "A fun, interactive social media web application. Where creatives from all over the world can come together and share their eco-friendly designs.",
		info2:
			"Utilized Ruby on Rails, Active Record for data relationships. JavaScript, React, Redux for state management in frontend.",
		url: "https://www.loom.com/share/ee145a72b8194b0e9d97a46a46315bdf",
		repo: "https://github.com/Johnnie71/eco-designs-frontend", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "/images/avatarScreenShot.png",
		title: "Adventures of Avatar",
		info: "Fun Interactive Ruby CLI game where a user can explore the world of Pandora.",
		info2:
			"Utilized Ruby on Rails, and Active Record to access a Sqlite3 Database for easy data relationships.",
		url: "https://www.loom.com/share/22b9f38a28494df081c97334847273c0",
		repo: "https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420/tree/JohnnieG", // if no repo, the button will not show up
	},
];

// CONTACT DATA
export const contactData = {
	cta: "",
	btn: "",
	email: "johnnie.agonz71@gmail.com",
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: "twitter",
			url: "https://www.twitter.com/intent/user?screen_name=Johnnieg71",
		},
		{
			id: nanoid(),
			name: "medium",
			url: "https://johnnie-agonz71.medium.com",
		},
		{
			id: nanoid(),
			name: "linkedin",
			url: "https://www.linkedin.com/in/johnnie-gonzalez71/",
		},
		{
			id: nanoid(),
			name: "github",
			url: "https://www.github.com/Johnnie71",
		},
	],
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
