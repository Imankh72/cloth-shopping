import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { auth } from "../firebase/config";

import styled from "styled-components";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
      </div>
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
