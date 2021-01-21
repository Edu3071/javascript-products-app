class Product{
    constructor( name, metros, cost){
        this.name = name;
        this.metros = metros;
        this.cost= cost;
//you can improve app by-- addProduct(){}
    }
}
class UI {
    addProduct(product) {
   const productList = document.getElementById("product-list");
   const element = document.createElement("div");
   element.innerHTML = `
   <div class ="card text-center mb-4">
    <div class ="card-body">
      <strong>Nombre del Producto</strong>: ${product.name}
      <strong>Metros</strong>: ${product.metros}
      <strong>Costo</strong>: ${product.cost}
      <a href="#" class="btn btn-warning" name="delete">Delete</a>
    </div>
   
   </div>
   `;
   productList.appendChild(element);
    }
    resetForm() {
        document.getElementById("product-form").reset();
    }
    deleteProduct(element) {
       if(element.name === "delete") {
           element.parentElement.parentElement.parentElement.remove();
           this.showMessage("Producto Eliminado", "danger");
       }
    }
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className ="alert alert-dismissible alert-warning";
      div.appendChild(document.createTextNode(message));
      //showing in DOM
     const container = document.querySelector(".container");
     document.querySelector("#app");
     container.insertBefore(div, app);
     setTimeout(function()  {
        document.querySelector(".alert").remove();
     }, 3000); 
    }
}
//trying set each product cost
function cost_value(name){
    if (name === "Pizza") {
        cost= 150 
        
    }

}
// DOM events
document.getElementById("product-form")
.addEventListener("submit" , function (e) {
const name = document.getElementById("name").value;
const metros = document.getElementById("metros").value;
const cost = document.getElementById("cost").value;
const product = new Product( name, metros, cost);
const ui = new UI();

if(name === "" || metros === "" || cost === ""){
    return ui.showMessage("complete los campos", "danger");
}
ui.addProduct(product);
ui.resetForm();
ui.showMessage("Producto Agregado", "success" );


e.preventDefault();
});
document.getElementById("product-list").addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});