type IdAndNameType = {
	id: number;
	name: string;
};

declare global {
	type DataCategoryType = {
		id: number;
		parent: number;
		count: number;
		name: string;
	};

	type CategoryType = {
		id: number;
		count: number;
		name: string;
		selected: boolean;
		children: CategoryType[];
		ontoggle: (c: CategoryType[]) => void;
	};

	type TagType = IdAndNameType;

	type ImageType = {
		src: string;
	};

	type ProductType = IdAndNameType & {
		description: string;
		tags: Array<IdAndNameType>;
		image: ImageType;
		categories: Array<IdAndNameType>;
	};
}

export {};
