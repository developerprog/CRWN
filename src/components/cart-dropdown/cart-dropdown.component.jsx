import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem =>(
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECHOUT</CustomButton>
    </div>
);

 const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
 })
 export default connect(mapStateToProps)(CartDropdown);