import DataCategories from "$data/categories.json";
import DataProducts from "$data/products.json";
import { makeCategories } from "$lib/utils/categories";

const PREFIX_URL = "https://destockcarrelage.web2biz.eu/wp-json/wc/store/v1/products";

const products: ProductType[] = DataProducts.map(({ id, name, description, tags, images, categories }) => ({
	id,
	name,
	description,
	tags,
	image: { src: images[0]?.src || "" },
	categories,
}));

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const res = await fetch(`${PREFIX_URL}`);
	const products = await res.json();

	return {
		categories: makeCategories(DataCategories),
		products: products.map(({ id, name, description, tags, images, categories }) => ({
			id,
			name,
			description,
			tags,
			image: { src: images[0]?.src || "" },
			categories,
		})),
	};
}
