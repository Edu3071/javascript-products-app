class UI {
  refresh() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    for (let item of itemsList) {
      const element = document.createElement("div");
      element.innerHTML = `
        <div class ="card text-center mb-4">
            <div class ="card-body">
            <strong>Nombre del Producto</strong>: ${item.productName}
            <strong>Metros</strong>: ${item.amount}
            <strong>Costo</strong>: ${item.total}
            <a href="javascript:deleteItem(${item.id})" class="btn btn-warning" name="delete" >Delete</a>
            </div>
        </div>
      `;

      productList.appendChild(element);
      const dataLayer = new DataLayer();
      document.getElementById("total").innerHTML = dataLayer.getTotal();
    }
  }
  resetForm() {
    document.getElementById("product-form").reset();
  }
  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = "alert alert-dismissible alert-warning";
    div.appendChild(document.createTextNode(message));
    //showing in DOM
    const container = document.querySelector(".container");
    document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

function deleteItem(id) {
  console.log("EXECUTED: ", id);
  const dataLayer = new DataLayer();
  dataLayer.deleteItem(id);
  const ui = new UI();
  ui.refresh();
}

// DOM events
document
  .getElementById("product-form")
  .addEventListener("submit", function (buttonEvent) {
    const name = document.getElementById("name").value;
    const metros = document.getElementById("amount").value;
    const item = new Item(name, metros);

    document.getElementById("totalItem").innerHTML = item.total;
    
    const dataLayer = new DataLayer();
    dataLayer.addItem(item);

    const ui = new UI();
    ui.refresh();

    if (name === "" || metros === "") {
      return ui.showMessage("complete los campos", "danger");
    }

    ui.resetForm();
    ui.showMessage("Producto Agregado", "success");

    buttonEvent.preventDefault();
  });
