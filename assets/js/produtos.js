var params = window.location.search.substring(1)

if (params == '') {

    var produtos = todosProdutos
} else if (params == 'super-raras') {

    var produtos = categoriaSuperRara
} else if (params == 'raras') {

    var produtos = categoriaRara
} else if (params == 'comuns') {

    var produtos = categoriaComun
} else if (params == 'giros-spins') {

    var produtos = categoriaBaus
} else {
    console.log('erro')
}

if (produtos.length <= 20) {

    document.querySelector('.list--pag').style.display = 'none'
}


listItems = (items, pageActual, limitItems) => {
    let result = []
    let totalPage = Math.ceil(items.length / limitItems)
    let count = (pageActual * limitItems) - limitItems
    let delimiter = count + limitItems

    if (pageActual <= totalPage) {

        for (let i = count; i < delimiter; i++) {

            result.push(items[i])
            count++
        }
    }
    return result
}

listItems(produtos, 1, 20)











produtos.map((i) => {

    let timestamp = new Date().getTime();

    let img = `${i.img}?${timestamp}`

    let cardProduto = document.querySelector('.item--modelo .card').cloneNode(true)

    cardProduto.querySelector('.card--img img').src = img
    cardProduto.querySelector('.card--img img').alt = i.titulo
    cardProduto.querySelector('.card--title').innerHTML = i.titulo
    cardProduto.querySelector('.card--price').innerHTML = `R$ ${i.precoUnitario.toFixed(2).replace('.', ',')}`

    document.querySelector('.content-cards').append(cardProduto)
})