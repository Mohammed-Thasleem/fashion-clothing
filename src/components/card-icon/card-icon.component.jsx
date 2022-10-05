import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CardContext } from '../../context/cart.context'

import './card-icon.style.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CardContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;