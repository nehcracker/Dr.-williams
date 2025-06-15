import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;

