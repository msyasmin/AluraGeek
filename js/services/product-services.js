const productList = () => {
    return fetch("https://fake-api-alura-nu.vercel.app/product")
            .then((res) => res.json())
            .catch((err) => console.log(err))

}

const createProducts = (name, price, image) => {
    return fetch("https://fake-api-alura-nu.vercel.app/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        }), 
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
};

const deleteProducts = async (id) => {
  return fetch(`${"https://fake-api-alura-nu.vercel.app/product"}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const servicesProducts = {
  productList,
  createProducts,
  deleteProducts,
};
