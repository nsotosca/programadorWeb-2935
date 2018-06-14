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

function Car(_model, _brand, _year) {
  this.model = _model
  this.brand = _brand
  this.year = _year
  var _id = Math.random()

  this.getCarName = function () {
    var _carName = 'Modelo:' + this.model + ' | Marca:' + this.brand + ' | Año:' + this.year
    return _carName
  }
  this.getId = function () {
    return _id
  }
}

var carsNewArray = []

for (var i = 0; i < cars.length; i++) {
  carsNewArray.push(new Car(cars[i].model, cars[i].brand, cars[i].year))
  console.log(carsNewArray[i].getCarName())
  console.log('ID:' + carsNewArray[i].getId())
  console.log('---------------------------------------------------')
}

