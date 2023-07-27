import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';


const Layouts = ({ children }) => {
	return (
		<>
			{/* <Header /> */}
			{children}

			{/* <Footer /> */}
		</>
	);
};

export default Layouts;