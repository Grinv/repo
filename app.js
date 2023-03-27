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




const DICES = {
    

    d4: {
       name: 'd4',
       faceAmount: 4,
   },
   d6: {
       name: 'd6',
       faceAmount: 6,
   },
   d8: {
       name: 'd8',
       faceAmount: 8,
   },
   d10: {
       name: 'd10',
       faceAmount: 10,
   },
   d12: {
       name: 'd12',
       faceAmount: 12,
   },
   d16: {
       name: 'd16',
       faceAmount: 16,
   },
   d20: {
       name: 'd20',
       faceAmount: 20,
   },


}


function play(dice) {

console.log(`${(Math.floor(Math.random() * 6) + 1)}${dice.name}`)

}
play(DICES.d4)


function play1(dice) {

console.log(`${dice.faceAmount}${dice.name}`)

}
play1(DICES.d10)


function birthday(years) {

    const NOWDATE = new Date() 
    const NOWYEARS = NOWDATE.getFullYear()
    const NOWMONTH = NOWDATE.getMonth()
    const NOWDAYS = NOWDATE.getDate()

    const USER = new Date(years)

    if((NOWYEARS - USER.getFullYear()) >= 14 && NOWMONTH >= USER.getMonth() && NOWDAYS >= USER.getDate()) return true
    else return false
}

console.log(birthday('2022-01-01'));