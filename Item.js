var lastID = 0;

class Item {
  constructor(name, amount) {
    this.id = lastID;
    this.productName = name;
    this.amount = amount;

    this.total = 0;

    if (this.productName === "Pizza") {
      this.total = 300 * this.amount;
    }
    if (this.productName === "Muzza") {
      this.total = 400 * this.amount;
    }
    if (this.productName === "Faina") {
      this.total = 160 * this.amount;
    }
    lastID++;
    //trying set each product cost
  }
}
