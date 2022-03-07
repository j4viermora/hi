import { Footer } from '../../components/Footer';
import { NavbarBlog } from '../../components/NavbarBlog';
import { PropsLayout } from '../../interfaces/interfaces';
import React from 'react';

export const BlogLayout = ({ children }: PropsLayout) => {
	return (
		<>
			<NavbarBlog />
			{children}
			<Footer />
		</>
	);
};
