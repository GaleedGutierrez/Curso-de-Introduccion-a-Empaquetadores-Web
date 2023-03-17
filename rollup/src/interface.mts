export interface InterfaceProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: InterfaceCategory;
	images: string[];
}

export interface InterfaceCategory {
	id: number;
	name: string;
	image: string;
}
