import { ReactElement } from "react";

export interface Project {
	title: string;
	description: string;
	linkRepo: string;
	linkOnline?: string | boolean;
}


export interface PropsLayout {
	children: ReactElement;
}

export interface TitlePost {
	img: string;
	title: string;
	slug: string;
	id: number;
}