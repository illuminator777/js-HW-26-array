const array = (item = null) => {
    const arr = [
        { name: "Банан", value: 10, count: 3 },
        { name: "Яблоко", value: 50, count: 2 },
        { name: "Груша", value: 30, count: 4 },
    ]

    console.log(
        arr.map(el => `Товар: ${el.name}, Кол-во: ${el.count}, Сумма: ${el.value}`)
    )

    console.log(arr.reduce((a, b) => a + (b.count * b.value), 0.))

    console.log(
        arr.map(el => ({ name: el.name, price: el.count * el.value })).sort((a, b) => b.price - a.price)[0].name
    )

}
array()