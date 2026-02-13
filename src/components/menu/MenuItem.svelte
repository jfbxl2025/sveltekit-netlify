<script lang="ts">
	import MenuItem from "./Menu.svelte";

	type Props = {
		name: string;
		categories: CategoryType[];
	};
	const { name, categories }: Props = $props();
</script>

<h2>{name}</h2>
<ul>
	<!-- {#each categories as category}
		<MenuItem name={category.name} categories={category.children} />
	{/each} -->
</ul>
