const array = (item = null) => {
    const arr = [
        { name: "Банан", value: 1, payed: true },
        { name: "Яблоко", value: 5, payed: false },
        { name: "Груша", value: 3, payed: true },
    ]

    if (item === null) return console.log(arr.sort((a, b) => a.payed - b.payed).map(el => el.name))
    console.log(
        (arr.find(f => f.name === item.name) ?
            arr.map(el => el.name === item.name ?
                ({ ...el, value: el.value + item.value })
                : el)
            : [...arr, item])
            .sort((a, b) => a.payed - b.payed).map(el => `${el.name}: ${el.value} штук`)
    )

}
array({ name: "Груша", value: 3, payed: true })
