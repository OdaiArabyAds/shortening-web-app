import React from "react";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/bars-solid.svg";
import styles from "./Header.module.scss";
import CustomLink from "../components/from/Link/CustomLink";
import CustomButton from "../components/from/Button/CustomButton";
import HamburgerMenu from "../components/ui/HamburgerMenu";
const Header = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="logo" />
      <nav className={styles.menu}>
        <HamburgerMenu image={Menu} customClass={styles} />
        <ul>
          <li>
            <CustomLink text="Features" />
          </li>
          <li>
            <CustomLink text="Pricing" />
          </li>
          <li>
            <CustomLink text="Resources" />
          </li>
          <li>
            <CustomLink text="Login" />
          </li>
          <li>
            <CustomButton name="Sign Up" shape="fullyRoundedShape" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
