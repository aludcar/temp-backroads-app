import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  {
    hyperLink: {
      href: "https://www.twitter.com",
      target: "_blank",
      navIcon: "nav-icon",
      footIcon: "footer-icon"
    },
    iconClass: "fab fa-facebook",
  },
  {
    hyperLink: {
      href: "https://www.twitter.com",
      target: "_blank",
      navIcon: "nav-icon",
      footIcon: "footer-icon"
    },
    iconClass: "fab fa-twitter",
  },
  {
    hyperLink: {
      href: "https://www.twitter.com",
      target: "_blank",
      navIcon: "nav-icon",
      footIcon: "footer-icon"
    },
    iconClass: "fab fa-squarespace",
  },
];

export const tours = [
  {
    img:tour1,
    date:"August 26th, 2020",
    destination:"Tibet Adventure",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    duration:6,
    price:1400
  },
  {
    img:tour2,
    date:"october 1th, 20200",
    destination:"best of java",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Indonesia",
    duration:11,
    price:1400
  },
  {
    img:tour3,
    date:"september 15th, 2020",
    destination:"Explore hong kong",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Hong Kong",
    duration:8,
    price:5000
  },
  {
    img:tour4,
    date:"december 5th, 2019",
    destination:"Kenya Highlight",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    duration:20,
    price:3300
  }
]

export const services = [
  {icon:"fas fa-wallet fa-fw", title:"saving money", text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Asperiores, officia.`},
  {icon:"fas fa-tree fa-fw", title:"endless hiking", text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Asperiores, officia.`},
  {icon:"fas fa-socks fa-fw", title:"amazing comfort", text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Asperiores, officia.`}
]
