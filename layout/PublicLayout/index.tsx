import React from 'react';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { PropsLayout } from 'interfaces/interfaces';

export const PublicLayout = ({ children }: PropsLayout) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};
