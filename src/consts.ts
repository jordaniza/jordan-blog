// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jordan's website";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const HACKING = "learn-assembly-by-hacking" as const;

type ContactLink = {
  name: string;
  href: string;
  icon: string;
  short: string;
};

export const EMAIL = {
  name: "Email",
  href: "mailto:j@jordaniza.com",
  short: "j@jordaniza.com",
  icon: "/email.png",
};

export const TWITTER = {
  name: "Twitter",
  href: "https://twitter.com/jordanimran2",
  icon: "/twitter.png",
  short: "@jordanimran2",
};

export const GITHUB = {
  name: "Github",
  href: "https://github.com/jordaniza",
  icon: "/github.png",
  short: "jordaniza",
};

export const DISCORD = {
  name: "Discord",
  href: "https://discordapp.com/users/867719073885716501",
  icon: "/discord.png",
  short: "jordaniza",
};

export const TELEGRAM = {
  name: "Telegram",
  href: "https://t.me/jordaniza",
  icon: "/telegram.png",
  short: "jordaniza",
};

export const WEBSITE = {
  name: "Website",
  href: "https://jordaniza.com",
  icon: "/website.png",
  short: "jordaniza.com",
};

export const PHONE = {
  name: "Phone",
  href: "+(971) 58 819 0615",
  icon: "/phone.png",
  short: "+(971) 58 819 0615",
};

export const CONTACT_LINKS: ContactLink[] = [
  EMAIL,
  TWITTER,
  GITHUB,
  DISCORD,
  TELEGRAM,
];
