import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>our history</h2>
		          <span />
		        </div>
		       <p className="about-text">
				"Fast fashion" refers to a business model in the clothing industry characterized by rapidly producing and selling inexpensive, trendy clothing items to meet consumer demand for quick, affordable fashion. It often involves resource depletion, exploitative labor practices, and significant environmental impacts. Resulting into producing the textile waste and thus harming the nature.

Alone, India accounts for 8.5% of global textile waste. Fast fashion industries are the worst contributors to our environment. 

Fast fashion’s negative impact on the environment and society can be mitigated through various sustainable practices. Thrifting, the act of buying, renting and selling second-hand or expensive clothing, is a compelling solution that addresses several of the problems associated with fast fashion. Here's how thrifting can help:
Reduce Textile Waste - Thrifting encourages the reuse and repurposing of clothing items, diverting them from landfills.
Resource Efficiency - By extending the lifespan of clothing, thrifting reduces the demand for new resource-intensive production.
Pollution Reduction - Thrifting decreases the need for new textile manufacturing, which is often a source of environmental pollution.

</p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;
