import React, { FC } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

export const PublicLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
