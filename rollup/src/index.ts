import logo from './assets/logo.png';
import { InterfaceProduct } from './interface.mjs';
import './styles/styles.css';

const main = async () => {
	const RESPONSE: Response = await fetch(API);
	const PRODUCTS: InterfaceProduct[] = await RESPONSE.json();
	const OUTPUT = PRODUCTS.map((product) => {
		const { images, title, price } = product;
		const TEMPLATE = `<article class="Card">
			<figure>
				<img src="${images[0]}" />
			</figure>
			<h2>${title} <small>$${price}</small></h2>
		</article>`;

		return TEMPLATE;
	});
	const TEMPLATES = OUTPUT.join('');
	const NEW_ITEM = document.createElement('section');
	const NEW_HEADER = document.createElement('header');
	const NEW_IMAGE = document.createElement('img');

	NEW_ITEM.classList.add('Items');
	NEW_ITEM.innerHTML = TEMPLATES;
	NEW_IMAGE.src = logo;
	NEW_HEADER.appendChild(NEW_IMAGE);
	BODY.append(NEW_HEADER, NEW_ITEM);
};

const BODY = document.querySelector('body') as HTMLBodyElement;
const API = 'https://api.escuelajs.co/api/v1/products/?offset=5&limit=10';

main();
