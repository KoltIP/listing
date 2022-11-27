import React from 'react';
import classes from '../styles/Listing.css';
import ItemModel from '../models/ItemModel';
import PropTypes from 'prop-types'

const Item = (props) => {
    const product = props.product;

    console.log(product);

    var title = 'Has not name';
    if (product.title!=undefined && product.title !=null)
        var title = (product.title.length < 50 ? product.title : product.title.substr(0,50).concat('..'));
    
    var code = product.currency_code;
    if (code == "USD")
      code = '$';
    else if (code == "EUR")
      code = '€';


    var level = 'item-quantity level-low';
    if (product.quantity>=10 && product.quantity<=20)
      level = 'item-quantity level-medium';
    else if (product.quantity>20)
      level = 'item-quantity level-high';

    return(   
        <div className='item-list'>
        <div className='item'>
          <div className='item-image'>
            <a href={product.url}>
              <img src={product.MainImage == undefined ? 'default' : product.MainImage.url_570xN} />
            </a>
          </div>
          <div className='item-details'>
            <p className='item-title'> {title}</p>
            <p className='item-price'>{code} {product.price}</p>
            <p className={level}>{product.quantity} left</p>
          </div>
        </div>
      </div>
    )    
}

Item.propTypes = {
    props: PropTypes.instanceOf(ItemModel)
  }

export default Item;