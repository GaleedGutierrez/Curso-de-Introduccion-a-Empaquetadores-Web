const t=document.getElementById("app"),e="https://api.escuelajs.co/api/v1/products?offset=0&limit=10";(async()=>{const a=await fetch(e),s=await a.json(),i=s?.map((t=>{const{images:e,title:a,price:s}=t;return`<article class="card">\n\t\t\t<figure>\n\t\t\t\t<img src="${e[0]}" alt="${a}" />\n\t\t\t</figure>\n\t\t\t<h2>${a} <small>$${s}</small></h2>\n\t\t</article>`})),n=i.join(""),c=document.createElement("section");c.classList.add("items"),c.innerHTML=n,t?.appendChild(c)})();
//# sourceMappingURL=index.70d47595.js.map