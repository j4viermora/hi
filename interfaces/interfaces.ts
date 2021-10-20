import { ReactElement } from "react";

export interface Project {
	title: string;
	description: string;
	linkRepo?: string |  undefined;
	linkOnline?: string | undefined;
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