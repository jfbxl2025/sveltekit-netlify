<script lang="ts">
	import type { Snippet } from "svelte";
	import Category from "./menu/Category.svelte";

	type PropType = {
		categories: CategoryType;
		onFabCategoryClick: (category: CategoryType) => void;
	};
	const { categories, onFabCategoryClick }: PropType = $props();
</script>

{#snippet renderCategory(category: CategoryType, display: string, index: number)}
	{#if category.id !== 55 && index < 6}
		<div class="tooltip" class:tooltip-left={index < 2} data-tip={category.name}>
			<button class="btn btn-lg btn-circle" onclick={() => onFabCategoryClick(category)}>{display}</button>
		</div>
	{/if}
{/snippet}

<div class="fab fab-flower">
	<!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
	<div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">C</div>

	<!-- Main Action button replaces the original button when FAB is open -->
	<button class="fab-main-action btn btn-circle btn-lg">C</button>
	{#each categories.children as category, index}
		{@render renderCategory(category, "C", index)}
	{/each}

	<!-- buttons that show up when FAB is open -->
	<!-- <div class="btn btn-lg btn-circle">A</div>
	<button class="btn btn-lg btn-circle">B</button>
	<button class="btn btn-lg btn-circle">C</button>
	<button class="btn btn-lg btn-circle">D</button> -->
</div>
