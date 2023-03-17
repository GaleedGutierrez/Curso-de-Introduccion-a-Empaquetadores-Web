const main = async ()=>{
    const RESPONSE = await fetch(API);
    const PRODUCTS = await RESPONSE.json();
    const TEMPLATES = PRODUCTS?.map((product)=>{
        const { images , title , price  } = product;
        const TEMPLATE = `<article class="card">
			<figure>
				<img src="${images[0]}" alt="${title}" />
			</figure>
			<h2>${title} <small>$${price}</small></h2>
		</article>`;
        return TEMPLATE;
    });
    const OUTPUT = TEMPLATES.join("");
    const NEW_ITEM = document.createElement("section");
    NEW_ITEM.classList.add("items");
    NEW_ITEM.innerHTML = OUTPUT;
    APP?.appendChild(NEW_ITEM);
};
const APP = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
main();

//# sourceMappingURL=index.579125c3.js.map
