const formatCurrency = value => {
    return new Intl.NumberFormat('PT-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

export default formatCurrency
