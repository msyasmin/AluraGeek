import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard (name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card")

    card.innerHTML = `
        <div class="img-container">
            <img class="card_img" src="${image}" alt="${name}">
        </div>

        <div class="card-container--info">
            <p>${name}</p>
            <div class="card-container--value">
                <p>$ ${price}</p>
                <buton data-borrar class="delete-button" data-id="${id}">
                    <img src="assets/trashIcon.png" alt="borrar"> 
                </buton>
            </div>
        </div>
    `;

    const botonBorrar = card.querySelector("[data-borrar]");
    botonBorrar.addEventListener("click", async () => {
        try {
            await servicesProducts.deleteProducts(id);
            card.remove();
        } catch (error) {
            console.log(error)
        }
    });

    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try{
        const listProducts = await servicesProducts.productList();
        
        listProducts.forEach((product) => {
            productContainer.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            )
        });
    } catch (error) {
        console.log(error)
    }
};

form.addEventListener("submit",(event) => {
    event.preventDefault();
    
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts
        .createProducts(name, price, image)
        .then((res) => console.log)
        .catch((err) => console.log(err));

    limpiarForm();
});

render();

const limpiarForm = () => {
    document.querySelector("[data-name]").value = "";
    document.querySelector("[data-price]").value = "";
    document.querySelector("[data-image]").value = "";
};