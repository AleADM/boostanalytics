//Abrir e fechar o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//Pegando as linhas da classe toggle existentes no documento html (linhas 41 e 42)
for (const element of toggle) {
  //Dizendo que quando houver a ação de click é para se executar a função
  element.addEventListener('click', function () {
    //Agora ele vê se dentro do nav (linha 28) tem a classe show. Se n tiver ele adiciona, se tiver ele tira
    nav.classList.toggle('show')
  })
}

//Fechando o menu ao se clicar em algum item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    //Removendo a classe show para se fechar o menu ao se clicar em um dos elementos no menu
    nav.classList.remove('show')
  })
}

//Esta parte faz a animaçao do logo quando a pagina carrega
const logo = document.querySelector('.logo i')

window.addEventListener('load', function () {
  if (this.window) {
    logo.classList.add('load')
  }
})

//Esta parte faz a animaçao da imagem quando a pagina carrega
/*
const imagem = document.querySelector('#home .image')

window.addEventListener('load', function () {
  if (this.window.load) {
    imagem.classList.add('load')
  }
})
*/
//Esta parte faz a animaçao da segunda imagem quando vc desce
/*
const imagem_about = document.querySelector('#about .image')
const imgHeight = imagem_about.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= imgHeight) {
    imagem_about.classList.add('scroll')
  }
})*/

//Muda o header da pagina quando der scroll
//Pegando a altura da parte de navegaçao
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*Testimonials swiper*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*scroll reveal*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links, footer .brand, footer .social
`,
  { interval: 100 }
)

/*Botao voltar para o topo*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*menu ativo conforme seçao visivel na pagina*/

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
