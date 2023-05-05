const values = [2, 14, 20, 50]

const newValues = values.map((value, index) => {
    let newValue = value + 2
    console.log('new value: ' + newValue + ' ,index number: ' + (index + 1))
})
