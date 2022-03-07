import { Footer } from '../../components/Footer';
import { NavbarBlog } from '../../components/NavbarBlog';
import { PropsLayout } from '../../interfaces/interfaces';
import React from 'react';

export const BlogLayout = ({ children }: PropsLayout) => {
	return (
		<>
			<NavbarBlog />
			<main className='container'>{children}</main>

			<Footer />
			<style jsx>
				{`
					main {
						min-height: calc(100vh - 100px);
					}
				`}
			</style>
		</>
	);
};
