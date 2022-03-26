import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { auth } from "../firebase/config";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import styled from "styled-components";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <HeaderWrapper>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="links">
        <NavLink className="link" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="link" to="/contact">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="link" onClick={() => auth.signOut()}>
            Log Out
          </div>
        ) : (
          <NavLink to="/sign-in" className="link">
            Sign In
          </NavLink>
        )}
        <CartIcon />
      </div>
      {showCart && <CartDropdown cartItems={cartItems} />}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;

  .links {
    display: flex;
    align-items: center;
    gap: 32px;

    .link {
      color: var(--color-grey-2);
      transition: all 0.3s;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        color: var(--color-grey-3);
      }
    }

    .active {
      color: var(--color-grey-3);
    }
  }
`;
