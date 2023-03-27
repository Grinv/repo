const Person  = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},

]


const Res = []

 Person.filter(item => {
    if(Person.hasOwnProperty(item) ) {
        Res.push(item)
        return item
    }
    return Person[item] = false
})


console.log(Res);