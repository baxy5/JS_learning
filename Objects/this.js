const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
      // this refers to the restaurant object
      // and it's used to access its properties
      return this.seatCapacity - this.numCustomers;
    }
  }
  
  console.log(restaurant.availableSeats());