
let heightHeader = document.querySelector('.header').clientHeight
document.querySelector('.title-cart').style.marginTop = heightHeader + 'px'


/*
    Função que atualiza dados do carrinho
*/

atualizaCarrinho = (carrinho) => {

    console.log(carrinho)
}

atualizaQt = (qt, id) => {

    let itemCarrinho = carrinho.itens.find(x => x.id === id)
    itemCarrinho.qt = parseFloat(qt)
    carrinho.valorTotal = calculaCarrinho(carrinho.itens)
    atualizaIcone(carrinho.itens)
    atualizaCarrinho(carrinho)

    let newValorIndiv = itemCarrinho.precoUnitario * qt

    document.querySelector(`#precoTotal${id}`).innerHTML = newValorIndiv.toFixed(2).replace('.', ',')
}

atualizaIcone = (itens) => {

    let somaItens = 0

    itens.map((i) => {
        let qtItem = i.qt

        somaItens += qtItem
    })

    document.querySelector('.qt-item-cart').innerHTML = somaItens
}


calculaCarrinho = (carrinho) => {

    let valorTotal = 0

    carrinho.map((item) => {

        let qtItem = item.qt
        let precoUnitario = item.precoUnitario

        valorTotal += qtItem * precoUnitario
    })

    document.querySelector('#vlr-fn-cart').innerHTML = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`

    return valorTotal
}

removeItemTabela = (id) => { document.getElementById(id).remove() }

removeItem = (id) => {

    let indexItem = carrinho.itens.findIndex(x => x.id === id)
    carrinho.itens.splice(indexItem, 1)

    if (carrinho.itens.length >= 1) {

        atualizaCarrinho(carrinho)

        removeItemTabela(id)

        calculaCarrinho(carrinho.itens)
        atualizaIcone(carrinho.itens)

    } else {

        ocultarTabela()
    }
}

ocultarTabela = () => {
    document.querySelector('.clean--cart').style.display = 'flex'
    document.querySelector('.table-itens').style.display = 'none'
    document.querySelector('.footer').classList.add('fixed-bottom')

    let heightBody = document.querySelector('body').clientHeight
    let heightFooter = document.querySelector('footer').clientHeight
    let heightHeader = document.querySelector('.header').clientHeight
    let heightTitle = document.querySelector('.title-cart').clientHeight

    let newHeight = heightBody - heightFooter - heightHeader - heightTitle

    document.querySelector('.clean--cart').style.height = newHeight + 'px'
}

finalizaPedido = () => { document.querySelector('.modal').style.display = 'block' }

cancPedido = () => { document.querySelector('.modal').style.display = 'none' }



if (typeof carrinho === 'undefined') {

    ocultarTabela()
} else {

    let valorTotal = carrinho.valorTotal
    let idCarrinho = carrinho.idCarrinho
    let itens = carrinho.itens


    itens.map((item) => {

        let timestamp = new Date().getTime();

        let linhaTabela = document.querySelector('tbody .item-carrinho').cloneNode(true)

        let precoUnit = item.precoUnitario.toFixed(2).replace('.', ',')

        let precoTotalItem = item.qt * item.precoUnitario
        let precoFinalItem = precoTotalItem.toFixed(2).replace('.', ',')

        calculaCarrinho(itens)

        document.querySelector('.item-carrinho').classList.add('visible')
        document.querySelector('.item-name').innerHTML = item.titulo
        document.querySelector('.input-qt').value = item.qt
        document.querySelector('.input-qt').setAttribute("onchange", `atualizaQt(this.value, ${item.id})`)
        document.querySelector('.unitPrice').innerHTML = 'R$ ' + precoUnit
        document.querySelector('.totalPrice').innerHTML = 'R$ ' + precoFinalItem
        document.querySelector('.totalPrice').setAttribute('id', `precoTotal${item.id}`)
        document.querySelector('.img-item-cart').src = `${item.img}?${timestamp}`
        document.querySelector('.img-item-cart').alt = item.titulo
        document.querySelector('.item-carrinho').setAttribute("id", `${item.id}`)
        document.querySelector('.remove-item-cart').setAttribute("onclick", `removeItem(${item.id})`)

        document.querySelector('#inserirLinha').append(linhaTabela)
    })

    atualizaIcone(itens)
}