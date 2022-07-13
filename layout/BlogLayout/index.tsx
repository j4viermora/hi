import { Footer } from '../../components/Footer';
import { NavbarBlog } from '../../components/NavbarBlog';
import React, { FC } from 'react';

export const BlogLayout: FC = ({ children }) => {
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
