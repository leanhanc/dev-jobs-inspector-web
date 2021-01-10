import React from "react";
import Image from "next/image";

import {
  HeaderMainContainer,
  HeaderContentContainer,
  HeaderLogo,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderMainContainer id="Header">
      <HeaderContentContainer>
        <Image
          alt="Buscar"
          src="/img/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="Header-Background"
        />
        <HeaderLogo>
          <Image
            layout="responsive"
            alt="Dev Job Inspector Argentina"
            src="/img/logo.png"
            width="100%"
            height="100%"
          />
        </HeaderLogo>
      </HeaderContentContainer>
    </HeaderMainContainer>
  );
};

export default Header;
