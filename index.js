let meta = {
    value: 'ler um livro todo mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}


meta.value = "não é mais ler livro"
meta.log(meta.value)


