import React from "react";
import Image from "next/image";

// Assets
import searchIcon from "../../public/img/search-icon.svg";

// Components
import Input from "components/Input";

// Styles
import styles from "./Header.module.sass";

// Data
import searchOptions from "data/searchOptions";

const Header = () => {
  return (
    <div id="Header" className={styles.Header}>
      <div className={styles.HeaderBackground}>
        <Image
          alt="Dev Job Inspector Argentina"
          layout="fill"
          objectPosition="left"
          src="/img/bg.jpg"
          objectFit="cover"
        />
      </div>
      <div className={styles.HeaderContent}>
        <div className={styles.HeaderLogo}>
          <Image
            alt="Buscar"
            height="100%"
            layout="intrinsic"
            objectPosition="center"
            src="/img/logo.png"
            width="100%"
          />
        </div>

        <fieldset className={styles.HeaderInputs}>
          <Input
            type="text"
            placeholder="Área, lenguaje o framework"
            icon={searchIcon}
            variant="typeahead"
          />

          <Input
            type="text"
            placeholder="Argentina"
            icon={searchIcon}
            variant="dropdown"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Header;
