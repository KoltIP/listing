import React from 'react';
import classes from '../styles/Listing.css';
import ItemModel from '../models/ItemModel';
import PropTypes from 'prop-types'

const Item = (props) => {
    const product = props.product;
    if (product.title!=undefined && product.title !=null)
        var title = (product.title.length < 50 ? product.title : product.title.substr(0,50).concat('..'));
    else    
        var title = 'Has not name';

    return(   
        <div className='item-list'>
        <div className='item'>
          <div className='item-image'>
            <a href={product.url}>
              <img src={product.MainImage} />
            </a>
          </div>
          <div className='item-details'>
            <p className='item-title'> {title}</p>
            <p className='item-price'>{product.price}</p>
            <p className='item-quantity level-medium'>{product.quantity} left</p>
          </div>
        </div>
      </div>
    )    
}

Item.propTypes = {
    props: PropTypes.instanceOf(ItemModel)
  }

export default Item;