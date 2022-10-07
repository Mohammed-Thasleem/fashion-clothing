import { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crownlogo } from '../../assets/crown.svg'
import CartIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CardContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CardContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Crownlogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink> 
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">
                            SIGN IN
                        </NavLink>     
                    )}
                   <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    
    )
}

export default Navigation;