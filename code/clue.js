// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

let suspects = [{
    title: 'Mr Green',
    firstName: 'Jacob',
    lastName: 'Green',
    color: '#067352',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  },
  {
    title: ' Mrs White',
    firstName: 'Delia',
    lastName: 'White',
    color: '#FFFFF4',
    description: 'Usually a frazzled servant',
    age: '70',
    image: 'assets/white.png',
    occupation: 'Housekeeper'
  },
  {
    title: 'Ms Peacock',
    firstName: 'Elanor',
    lastName: 'Peacock',
    color: '#252949',
    description: 'An elderly, still-attractive, woman',
    age: '62',
    image: 'assets/peacock.png',
    occupation: 'Socialite'
  },
  {
    title: 'Mr Plum',
    firstName: 'Victor',
    lastName: 'Plum',
    color: '#700360',
    description: 'A quick-witted, professor with a bow tie and glasses',
    age: '38',
    image: 'assets/plum.png',
    occupation: 'professor'
  },
  {
    title: 'Miss Cassandra',
    firstName: 'Cassandra',
    lastName: 'Scarlett',
    color: '#EC0E47',
    description: 'A femme fatal',
    age: '27',
    image: 'assets/scarlet.png',
    occupation: 'actress'
  },
  {
    title: 'Cln Mustard',
    firstName: 'Jack',
    lastName: 'Mustard',
    color: '#FBBF54',
    description: 'A dignified dapper and dangerous military man',
    age: '55',
    image: 'assets/mustard.png',
    occupation: 'officer'
  }
]

//console.log(suspects[0].firstName)
//console.log(suspects[suspects.length - 1])

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const weapon = [{
    name: 'rope',
    weight: 10,
  },
  {
    name: 'knife',
    weight: 8,
  },
  {
    name: 'candlestick',
    weight: 20,
  },
  {
    name: 'dumbbell',
    weight: 30,
  },
  {
    name: 'poison',
    weight: 0.2,
  },
  {
    name: 'axe',
    weight: 18,
  },
  {
    name: 'bat',
    weight: 12,
  },
  {
    name: 'trophy',
    weight: 15,
  },
  {
    name: 'pistol',
    weight: 9,
  }
]
//console.log(weapon[2].weight)

const rooms = [
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]
//console.log(rooms)


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
/*
const suspects = [
  mrGreen,
  mrsWhite
  // ...  and the rest
]

const weapons = []

const rooms = []
*/
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}
//randomSelector(suspects)


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: '',
  weapon: '',
  room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.description}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  //document.getElementById('killerName').innerHTML = `${mystery.killer.description}`
}

// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapon)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}


let revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}