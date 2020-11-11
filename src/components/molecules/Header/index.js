import React from "react";
import "./Header.scss";
import { LogoDanaUtama } from "../../../assets/";

const Header = () => {
  return (
    <>
      <nav class="navbar">
        <div class="navbar__content">
          <a
            href="/"
            aria-current="page"
            class="navbar__menu nuxt-link-exact-active nuxt-link-active"
          >
            <img src={LogoDanaUtama} alt="DANA's logo" class="navbar__logo" />
          </a>
          {/* <div class="menu-icon">
            <span class="line-1"></span> <span class="line-2"></span>{" "}
            <span class="line-3"></span>
          </div>
          <a href="/product" class="navbar__menu">
            Produk &amp; Fitur
          </a>
          <a href="/business" class="navbar__menu">
            Bisnis &amp; Enterprise
          </a>
          <a href="/career" class="navbar__menu">
            Karir
          </a>
          <a href="/promo" class="navbar__menu">
            Promo
          </a>
          <a href="/blog" class="navbar__menu">
            Blog
          </a>
          <a href="/faq" class="navbar__menu">
            FAQ
          </a>
          <a href="/games" target="_blank" class="navbar__menu">
            Games
          </a>
          <div class="navbar__lang">
            <a href="/en" class="navbar__menu">
              EN
            </a>{" "}
            <a
              href="/"
              aria-current="page"
              class="navbar__menu nuxt-link-exact-active nuxt-link-active navbar__lang--selected"
            >
              ID
            </a>
          </div>
          <a href="/download" class="navbar__menu__download">
            Download
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
