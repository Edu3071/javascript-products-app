var itemsList = [];

class DataLayer {
  addItem(product) {
    itemsList.push(product);
  }
  deleteItem(id) {
    itemsList = itemsList.filter((item) => item.id !== id);
  }
  getTotal() {
    let total = 0;
    for (let item of itemsList) {
      total += item.total;
    }
    return total;
  }
}
