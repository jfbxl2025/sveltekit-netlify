import DataCategories from "$data/categories.json";
import DataProducts from "$data/products.json";
import { makeCategories } from "$lib/utils/categories";

const products: ProductType[] = DataProducts.map(({ id, name, description, tags, images, categories }) => ({
	id,
	name,
	description,
	tags,
	image: { src: images[0]?.src || "" },
	categories,
}));

/** @type {import('./$types').LayoutLoad} */
export function load() {
	console.log(products.length);
	return {
		categories: makeCategories(DataCategories),
		products,
	};
}
