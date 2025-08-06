
const btnText = document.getElementById('btnText');
const btnDL = document.getElementById('trilho');
btnText.textContent = 'Light';
const btnMenu = document.querySelector('.menuIcon');
const btnMenu2 = document.querySelector('.menuIcon2');
const menuSpan = document.querySelector('.menuSpan');

btnMenu.addEventListener('click', () => {
    menuSpan.classList.toggle('show');
});
btnMenu2.addEventListener('click', () => {
    menuSpan.classList.toggle('show');
});

// use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    
    gsap.to(['#btnMenu', '#btnText', '#trilho', '#seletoridiomas'],{
        visibility: "hidden"
    })
    gsap.to('#Intro',{
        visibility: "visible"
    })
    gsap.fromTo('nav', {
        height: 700
    },{
        height: 47,
        delay: 2,
        duration: .3,
        onStart: () => {
            gsap.to('#Intro',{
                visibility: "hidden"
            });
        },
        onComplete: () => {
            gsap.set(['#btnMenu', '#btnText', '#trilho', '#seletoridiomas'], {
                visibility: "visible"
            });
            
        }
    })
    gsap.to('.foto', {
        yoyo: true,
        y: 5,
        duration: 3,
        repeat: -1,
    })
    gsap.to('.bg-grad', {
        repeat: -1,             // -1 para loop infinito
        yoyo: true,             // Volta para o estado inicial suavemente
        duration: 3,            // Duração da animação em segundos
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
            inicioM: 'Este é um exemplo simples de como alterar o idioma de uma página usando JavaScript.',
            sobreMim: 'Sobre Mim',
            contatoM: 'Contato'
        },
        'en': {
            introducao: 'Feel Free to Learn More About Me',
           
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