<script lang="ts">
	type Props = { product: ProductType; index: number };

	const { product, index }: Props = $props();
</script>

<div class="card card-md bg-base-100 w-64 sm:w-full shadow-sm">
	<span class="absolute">{product.categories.map(({ name }) => name).join(" - ")}</span>
	<figure>
		<img src={product.image.src} alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{product.name}
		</h2>
		{@html product.description}
		<div class="card-actions justify-end">
			{#each product.tags as tag}
				<div class="badge badge-outline badge-sm">{tag.name}</div>
			{/each}
		</div>
	</div>
</div>
