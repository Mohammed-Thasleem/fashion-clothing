import { useContext } from 'react'

import { CardContext } from '../../context/cart.context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './card-icon.style'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CardContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;