// text writing
let nama = document.getElementById("nama");
let typewriter = new Typewriter(nama, {
  start: true,
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString("I'm Faris Maulidan")
  .pauseFor(4000)
  .deleteChars(10)
  .pauseFor(300)
  .deleteAll(300)
  .start();

// loop skill
let skill = document.getElementById("box");

let namaKemampuan = [
  {
    id: 1,
    tech: "HTML",
    logo: '<i class="fa-brands fa-html5 text-4xl md:text-5xl text-orange-400"></i>',
  },
  {
    id: 2,
    tech: "CSS",
    logo: '<i class="fa-brands fa-css3-alt text-4xl md:text-5xl text-sky-500"></i>',
  },
  {
    id: 3,
    tech: "Bootstrap",
    logo: '<i class="fa-brands fa-bootstrap text-4xl md:text-5xl text-purple-500 "></i>',
  },
  {
    id: 4,
    tech: "Tailwind",
    logo: '<svg height="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 154" width="38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" x1="-2.777778%" x2="100%" y1="32%" y2="67.555556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z" fill="url(#a)"/></svg>',
  },
  {
    id: 5,
    tech: "Javasript",
    logo: '<i class="fa-brands text-4xl text-yellow-400 md:text-5xl fa-js"></i>',
  },
  {
    id: 6,
    tech: "React JS",
    logo: '<i class="fa-brands fa-react text-4xl text-blue-500 md:text-5xl"></i>',
  },
];
namaKemampuan.map((kemampuan) => {
  let namaSkill = document.createElement("div");
  namaSkill.innerHTML = `<div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" class='box flex gap-3 items-center justify-center px-3 border-2 border-sky-400 p-3 rounded-lg'> 
  <div class = "">${kemampuan.logo}</div> <div class = "flex justify-center items-center md:text-xl">${kemampuan.tech}</div></div>`;

  // memasukkan isi
  skill.append(namaSkill);
});

// loop portofolio

let portoBox = document.getElementById("portoBox");
let namaPorto = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: '<img src="./assets/porto1.png" alt="" class="rounded-md" />',
    description:
      "an E-commerce website that displays from the client side and uses the open source api, Fake API",
    tech2: "React JS, Tailwind",
    githubLogo:
      '<a href="https://github.com/Faris955/" target="_blank"> <i class="fa-brands fa-github"></i></a> ',
    visitLogo:
      '<a href="http://farisportofolio.netlify.app/" target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
  {
    id: 2,
    title: "Coming Soon",
    img: '<img src="./assets/404.jpg" alt="" class="rounded-md" />',
    description: "Page Not Found",
    tech2: "-",
    githubLogo: "-",
    visitLogo: "-",
  },
  {
    id: 3,
    title: "Coming Soon",
    img: '<img src="./assets/404.jpg" alt="" class="rounded-md" />',
    description: "Page Not Found",
    tech2: "-",
    githubLogo: "-",
    visitLogo: "-",
  },
];
namaPorto.map((porto) => {
  let div = document.createElement("div");
  div.innerHTML = `<div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" class= "bg-neutral-800 px-4 py-3 rounded-md">
  <div class="flex flex-col gap-5" >
              <h1 class="text-lg md:text-xl">${porto.title}</h1>
              ${porto.img} 
              <p class = 'text-sm md:text-base'>
                ${porto.description}
              </p>
              <span class="text-sky-300 flex justify-between items-center md:text-base"
                >${porto.tech2}
                <span class="text-gray-200 flex gap-3 px-3 items-center">
                  ${porto.githubLogo}
                  ${porto.visitLogo}
                </span>
              </span>
            </div>
  </div>`;
  portoBox.append(div);
});

// function navbar bawah
const navbar = document.getElementById("navbar");
const nav = document.getElementById("nav");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navbar.style.transform = "translateY(200%)";
    navbar.style.transition = "all .5s ease";

    nav.style.transition = "all .5s ease";
    nav.style.transform = "translateY(-200%)";
  } else {
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "all .5s ease";

    nav.style.transition = "all .5s ease";
    nav.style.transform = "translateY(0)";
  }

  lastScrollY = window.scrollY;
});

// function navbar atas
