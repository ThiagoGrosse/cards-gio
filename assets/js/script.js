window.addEventListener('scroll', () => {
    let position = window.scrollY;

    if (position > 200) {

        document.querySelector('.goToTop').style.display = 'block'
    } else {

        document.querySelector('.goToTop').style.display = 'none'
    }

    const sr = document.querySelector("#super-raras")
    const cr = document.querySelector("#cartas-raras")
    const cc = document.querySelector("#cartas-comuns")
    const sg = document.querySelector("#giros-spins")

    const posicoesSR = sr.getBoundingClientRect()
    const posicoesCR = cr.getBoundingClientRect()
    const posicoesCC = cc.getBoundingClientRect()
    const posicoesSG = sg.getBoundingClientRect()

    let fadeInRight = document.querySelectorAll('.fadeInRight').length
    let fadeInLeft = document.querySelectorAll('.fadeInLeft').length

    if (fadeInRight != 2 || fadeInLeft != 2) {

        if (posicoesSR.bottom <= window.innerHeight) {

            document.querySelector('#super-raras-text').classList.add('fadeInLeft')
        }

        if (posicoesCR.bottom <= window.innerHeight && posicoesCR.bottom > posicoesSR.bottom) {

            document.querySelector('#cartas-raras-text').classList.add('fadeInRight')
        }

        if (posicoesCC.bottom <= window.innerHeight && posicoesCC.bottom > posicoesCR.bottom) {

            document.querySelector('#cartas-comuns-text').classList.add('fadeInLeft')
        }


        if (posicoesSG.bottom <= window.innerHeight && posicoesSG.bottom > posicoesCC.bottom) {

            document.querySelector('#giros-spins-text').classList.add('fadeInRight')
        }
    }

})

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    document.querySelector('.goToTop').style.display = 'none'
}
