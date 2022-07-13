import { ReactElement } from 'react';

export interface Project {
  title: string;
  description: string;
  linkRepo?: string;
  linkOnline?: string;
}

export interface TitlePost {
  img?: string;
  title: string;
  slug: string;
  date: string;
}

export interface IFrontmatter {
  title: string;
  date: string;
  keywords: string;
  slug: string;
  content: string;
}
