import { nanoid } from "nanoid";
import {
	git,
	express,
	nodejs,
	react,
	ruby,
	rails,
	javaScript,
	postgres,
	redux,
} from "./techIcons";

export const heroData = {
	name: "Johnnie Gonzalez",
	subtitle: "Welcome to my World!!!",
};

export const aboutData = {
	img: "profile.jpg",
	paragraphOne:
		"I'm a software engineer with an eye for design and a passion for all that is eco-friendly. My curosity drives me to create, learn new technologies, and find new ways to implement solutions to complexed problems. I also enjoy interacting and collabortating within a diversed set of teams, coming together to push the limitless boundaries of a growth mindset.",
	paragraphTwo:
		"With a background in architectural design, and a passion for sustainability, I have discovered programming as the perfect vehicle for leading the way toward a greener future, for generations to come. With an estimated 7.26 billion people (91% of the world population) owning a smartphone in 2022, access to a more sustainable world is now at our fingertips.",
	paragraphThree:
		"Please feel free to explore my page and learn about my projects... 😀",
};

export const projectsData = [
	{
		id: nanoid(),
		img: "/images/ChatApp.gif",
		title: "Chat App",
		info: "A responsive chat application that mimics chat services such as Slack or Microsoft Teams. Enabling users to create groups and have individual chats. Using Stream API services to scale the app.",
		techStack: {
			icons: [git, express, nodejs, react],
		},
		repo: "https://github.com/Johnnie71/RM-Client",
	},
	{
		id: nanoid(),
		img: "/images/EZ-GIF.gif",
		title: "E-Z Task",
		info: "A clean and simple single-page CRUD application intended to serve as a desktop extension. With the functionality of organization in a posted notes format. Implemented a weather and stocks widget for easy visibilty.",
		techStack: {
			icons: [ruby, rails, postgres, javaScript],
		},
		url: "https://www.loom.com/share/00d67a6c4a7c4d5b9d67fd5ff7fcd8c9",
		repo: "https://github.com/Johnnie71/EZ-Task-frontend",
	},
	{
		id: nanoid(),
		img: "/images/Eco-Demo-Gif.gif",
		title: "Eco Share",
		info: "A fun, interactive social media web application. Where creatives from all over the world can come together and share their eco-friendly designs. Users can follow/unfollow and comment on posts!",
		techStack: {
			icons: [ruby, postgres, react, redux],
		},

		url: "https://www.loom.com/share/ee145a72b8194b0e9d97a46a46315bdf",
		repo: "https://github.com/Johnnie71/eco-designs-frontend",
	},
	{
		id: nanoid(),
		img: "/images/avatarScreenShot.png",
		title: "Adventures of Avatar",
		info: "Fun Interactive Ruby CLI game where a user can signup/signin and explore the world of Pandora. Music from the movie begins once game is started. User chooses paths to follow, but beware of Pandora's magical environment!",
		techStack: {
			icons: [git, ruby, postgres],
		},
		url: "https://www.loom.com/share/22b9f38a28494df081c97334847273c0",
		repo: "https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420/tree/JohnnieG",
	},
];

export const contactData = {
	email: "johnnie.agonz71@gmail.com",
};

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
