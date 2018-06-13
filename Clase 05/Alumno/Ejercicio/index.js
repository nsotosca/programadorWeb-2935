var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

function Car(model, brand, year) {
  this.model = model
  this.brand = brand
  this.year = year
  var id = Math.random()

  this.getCarName = function () {
    var carName = 'Modelo:' + model + ' | Marca:' + brand + ' | Año:' + year
    return carName
  }
  this.getId = function () {
    return id
  }
}

var carsNewArray = []

for (var i = 0; i < cars.length; i++) {
  carsNewArray.push(new Car(cars[i].model, cars[i].brand, cars[i].year))
  console.log(carsNewArray[i].getCarName())
  console.log('ID:' + carsNewArray[i].getId())
  console.log('---------------------------------------------------')
}

