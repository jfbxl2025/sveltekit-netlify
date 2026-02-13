<script lang="ts">
	// import { HTMLInputElement } from 'svelte/elements';
	import type { Snippet } from "svelte";
	type PropType = {
		categories?: CategoryType;
		onMenuCategoryClick: (category: CategoryType) => void;
		menuOpen?: boolean;
		children: Snippet;
	};
	let { categories, onMenuCategoryClick, menuOpen = false, children }: PropType = $props();
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" checked={menuOpen} hidden />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-3" class="btn drawer-button lg:hidden"> Open drawer </label>
		{@render children()}
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>

		<ul class="menu bg-base-200 min-h-full p-4">
			<!-- Sidebar content here -->

			{#snippet renderCategory(category: CategoryType)}
				<li>
					<label class="label wrap-break-word break-all">
						<input
							type="checkbox"
							checked={category.selected}
							class="checkbox checkbox-xs"
							oninput={() => onMenuCategoryClick(category)}
						/>
						{@html category.name} ( {category.count} ) - {category.id}
					</label>
					{#if category.children.length > 0}
						<ul>
							{#each category.children as child}
								{@render renderCategory(child)}
							{/each}
						</ul>
					{/if}
				</li>
			{/snippet}

			{#if categories}
				<li>
					<h2>
						{categories.name}
					</h2>
					<ul class="max-w-xs lg:max-w-sm">
						{#each categories.children as category}
							{@render renderCategory(category)}
						{/each}
					</ul>
				</li>
			{/if}
		</ul>
	</div>
</div>
