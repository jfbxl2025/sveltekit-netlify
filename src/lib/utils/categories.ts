export function makeCategories(dataCategories: DataCategoryType[]): CategoryType {
	const make: (d: { id: number; count?: number; name: string }) => CategoryType = ({ id, count = -1, name }) => ({
		id,
		name,
		count,
		selected: false,
		children: new Array<CategoryType>(),
		ontoggle: (children) => {
			children.forEach((child) => (child.selected = !child.selected));
		},
	});

	const getChildren: (d: CategoryType) => CategoryType = (parent) => {
		const children = dataCategories.filter((c) => c.parent === parent.id).map(make);
		parent.children.push(...children);
		parent.children.forEach(getChildren);
		return parent;
	};

	return getChildren(make({ id: 0, name: "Catégories" }));
}
