
const btnText = document.getElementById('btnText');
const btnDL = document.getElementById('trilho');
btnText.textContent = 'Light';
const btnMenu = document.querySelector('.menuIcon');
const btnMenu2 = document.querySelector('.menuIcon2');
const menuSpan = document.querySelector('.menuSpan');
const menuLinks = document.querySelectorAll('.inicioM, .sobreMimM, .habilidadesM, .contatoM');

btnMenu.addEventListener('click', () => {
    menuSpan.classList.toggle('show');
});
btnMenu2.addEventListener('click', () => {
    menuSpan.classList.toggle('show');
});


 document.addEventListener("DOMContentLoaded", (event) => {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuSpan.classList.toggle('show');
        });
    });
    
    
    gsap.fromTo(['#Intro','#Intro2'], {
        y: 350
    },{
        duration: 1,
        y: 0
    })
    gsap.fromTo('#videoIntro', {
        height: '100%',
    },{
        height: 0,
        delay: 5.5,
        duration: 1,
        onComplete: () => {
            gsap.set('#videoIntro', {
                visibility: "hidden"
            });
        }
    })
    gsap.fromTo('nav', {
        height: '100%',
    },{
        height: 47,
        delay: 5.5,
        duration: 1,
        onStart: () => {
            
            gsap.to(['#Intro','#Intro2'],{
                visibility: "hidden"
            });
            
        },
        onComplete: () => {
            gsap.set(['#btnMenu', '#btnText', '#trilho', '#seletoridiomas', '.foto', '#txtApresentacao'], {
                visibility: "visible"
            });
        }
    })
    gsap.to('.foto', {
        yoyo: true,
        y: 5,
        duration: 2,
        repeat: -1,
    })
    gsap.to('.bg-grad', {
        repeat: -1,           
        yoyo: true,
        duration: 3,
        // Novas cores para animar
        "--cor-var": "#599aaa",

        ease: "power1.inOut"
    })
    gsap.to('.dark', {
        backgroundColor: '#cecece'
    })

    btnDL.addEventListener('click', ()=> {
        if (btnText.textContent == 'Light') {
            gsap.to('#btnDL', {
                x: 29
            })
            gsap.to('.dark', {
                backgroundColor: '#434343',
                color: 'white'
            })
            gsap.to('.bg-grad', {
                // Novas cores para animar
                "--cor-fixa": "#434343",
                "--cor-fixa2": "#434343",
            })
            gsap.to('section', {
                boxShadow: 'white'
            })
            gsap.set('.menuIcon', {
                attr: { src: "img/icon-menu-white.png" }
            })
            document.getElementById('btnText').textContent = 'Dark';
        } else {
            gsap.to('#btnDL',{
                x: 0
            })
            gsap.to('.dark', {
                backgroundColor: '#cecece',
                color: 'black'
            })
            gsap.to('.bg-grad', {
                // Novas cores para animar
                "--cor-fixa": "#cecece",
                "--cor-fixa2": "#cecece",
            })
            gsap.set('.menuIcon', {
                attr: { src: "img/icon-menu.png" }
            })
            document.getElementById('btnText').textContent = 'Light';
        }; 
    });
    //gsap.registerPlugin(ScrollTrigger);
    //ScrollTrigger.normalizeScroll(true);

 });

 // Objeto com as traduções
    const translations = {
        'pt-br': {
            introducao: 'Fique a Vontade para Conhecer Mais Sobre Mim',
            inicioM: 'Início',
            sobreMimM: 'Sobre Mim',
            habilidadesM: 'Habilidades',
            contatoM: 'Contato',
            emDev: 'Em Desenvolvimento'
        },
        'en': {
            introducao: 'Feel Free to Learn More About Me',
            inicioM: 'Home',
            sobreMimM: 'About Me',
            habilidadesM: 'Skills',
            contatoM: 'Contact',
            emDev: 'In Development'
        }
    };

    // Função para mudar o idioma
    function alterarIdioma(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Opcional: Atualizar o atributo lang da tag <html>
        document.documentElement.lang = lang;
    }