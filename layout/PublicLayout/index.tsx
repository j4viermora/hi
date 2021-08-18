import React, { ReactElement } from 'react';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';

interface PropsLayout {
	children: ReactElement;
}

export const PublicLayout = ({ children }: PropsLayout) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};
