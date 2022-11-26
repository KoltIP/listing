import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from '../styles/Listing.css';
import Item from '../components/Item';


const Listing = (props) => {
    
    const products = props.products;

    return(  
        <div>
        {
            //<Item product = {products[1]} />
            products.map(
                (item) => <Item key={item.listing_id} product = {item} />
            )
        } 
        </div>
    )    
}
export default Listing;