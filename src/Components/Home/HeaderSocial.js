import React from "react";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";

const HeaderSocial = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/hrsh_line_up/"
        className="home__social-link"
        target="_blank"
      >
        <img src={instagram} alt="" className="home__img" />
      </a>

      <a
        href="https://github.com/Hartz-byte"
        className="home__social-link"
        target="_blank"
      >
        <img src={github} alt="" className="home__img" />
      </a>

      <a href="#contact" className="home__social-link">
        <img src={mail} alt="" className="home__img" />
      </a>
    </div>
  );
};

export default HeaderSocial;
