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


const newYear = '2023-12-31 00:00:00'

const month = document.querySelector('#month')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minute = document.querySelector('#minutes')
const second = document.querySelector('#seconds')


function timer(time) {
    const nowData = new Date()
    const newYearDate = new Date(time)

    const lastYear = newYearDate - nowData

    let  monthLeft = newYearDate.getMonth() - nowData.getMonth()
    let daysLeft = Math.floor(lastYear / 86_400_000)
    let hoursLeft = Math.floor(lastYear / 1000 / 60 / 60 ) % 24
    let minutesLeft = Math.floor(lastYear / 1000 / 60 ) % 60
    let secondsLeft = Math.floor(lastYear / 1000 ) % 60
    if(hoursLeft > 10)  hoursLeft


  
    month.innerHTML = monthLeft  < 10 ? '0' + monthLeft : monthLeft
    days.innerHTML = daysLeft  < 10 ? '0' + daysLeft : daysLeft
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minute.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    second.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
  
}
timer(newYear)

setInterval(() => {
    
    timer(newYear)
}, 1000);



class Pers {
    constructor(race, name, lang) {
      this.race = race;
      this.name = name;
      this.lang = lang;
    }
    speak() {
      console.log(`${this.lang}: ${this.name}`);
    }
  }
  
  class Orc extends Pers {
    weapon = "Топор";
  
    punch() {
      console.log(`${this.name} УДАРИЛ ${this.weapon}`);
    }
  }
  
  class Elf extends Pers {
    spell = "METAMORPHOSIS";
  
    createspell() {
      console.log(`${this.name} Coздал заклинание ${this.spell}`);
    }
  }
  
  const person = new Pers();
  const orc = new Orc("Орк", "Тралл", "Лок Тар'огар");
  const elf = new Elf("Эльф", "Иллидан", "Вы не готовы!");
  
  orc.punch();
  orc.speak();
  
  elf.createspell()
  elf.speak()


  class Car {
    #brand;
    #model;
    #run;
    constructor(brand, model, run) {
      this.#brand = brand;
      this.#model = model;
      this.#run = run;
    }
  
    info() {
      console.log(
        `brand: ${this.#brand}, model: ${this.#model}, run: ${this.#run}`
      );
    }
    get createRun() {
      return this.#run;
    }
  
    set createRun(run) {
      this.#run = run;
    }
  }
  
  let car = new Car("Mazda", "3", "150000");
  
  car.createRun = 12000;
  car.info();