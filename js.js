// pet generator
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  SameOwner(pets) {
    let same = false;
    pets.forEach((pet) => {
      if (pet.ownerName === this.ownerName && pet !== this) {
        same = true;
      }
    });
    return same;
  }
}

// lista animali
const listPet = [];

console.log(listPet);

// dati dal form
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

// form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const petx = new Pet(petName.value, ownerName.value, species.value, breed.value);
  listPet.push(petx);

  if (petx.SameOwner(listPet)) {
    console.log("Esiste già un altro animale con lo stesso padrone");
  } else {
    console.log("Nessun altro animale con lo stesso padrone");
  }

  console.log(listPet);

  form.reset();
});

// class utenti
console.log("----------------------------------------------------");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoIsOlder(who) {
    if (this.age > who.age) {
      console.log("sei vecchio");
    } else {
      console.log("è vecchio lui");
    }
  }
}

const utente = new User("pippo", "topolino", 25, "genova");
const utente2 = new User("legion", "aoc", 5, "milano");
const utente3 = new User("Giuseppe", "Gambino", 21, "sicilia");

console.log(utente);
console.log(utente2);

console.log(utente3.whoIsOlder(utente2));
