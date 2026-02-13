<script lang="ts">
	import { SvelteSet } from "svelte/reactivity";
	import { fly } from "svelte/transition";
	import ProductBadge from "$components/ProductBadge.svelte";
	import CategoriesMenu from "$components/CategoriesMenu.svelte";
	import CategoriesFAB from "$components/CategoriesFAB.svelte";
	import Category from "$components/menu/Category.svelte";
	import { derived } from "svelte/store";
	let { data } = $props();

	let visibleCategories = new SvelteSet();
	// svelte-ignore state_referenced_locally
	let activeCategory = $state<CategoryType>();
	let visibleCategoriesID = $state(new Array<number>());
	let menuOpen = $state(false);

	const hiddenChildrenDeep = (category: CategoryType) => {
		visibleCategoriesID.filter((active) => active !== category.id);
		category.children.forEach(hiddenChildrenDeep);
	};

	const showChildrenDeep = (category: CategoryType) => {
		visibleCategoriesID.push(category.id);
		category.children.forEach(showChildrenDeep);
	};

	const onMenuCategoryClick = (category: CategoryType) => {
		if (visibleCategoriesID.includes(category.id)) {
			hiddenChildrenDeep(category);
		} else {
			showChildrenDeep(category);
		}
	};

	const onFabCategoryClick = (category: CategoryType) => {
		activeCategory = category;
		menuOpen = true;
	};

	const isVisible = (product: ProductType): boolean =>
		product.categories.some(({ id }) => visibleCategoriesID.includes(id));
</script>

<CategoriesFAB categories={data.categories} {onFabCategoryClick} />

<CategoriesMenu categories={activeCategory} {onMenuCategoryClick} {menuOpen}>
	{#each data.products as product, index}
		{#if isVisible(product)}
			<div in:fly={{ y: 400 }} out:fly={{ y: -200 }}>
				<ProductBadge {product} {index} />
			</div>
		{/if}
	{/each}
</CategoriesMenu>
