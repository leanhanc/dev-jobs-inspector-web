import React from "react";
import Image from "next/image";

// Assets
import searchIcon from "../../public/img/search-icon.svg";
import locationIcon from "../../public/img/location-icon.svg";

// Components
import TypeaheadInput from "components/TypeaheadInput";
import SelectInput from "components/SelectInput";

// Styles
import styles from "./Header.module.sass";

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
          <TypeaheadInput type="text" placeholder="Área, lenguaje o framework" icon={searchIcon} />
          <SelectInput type="text" placeholder="Argentina" icon={locationIcon} />
        </fieldset>
      </div>
    </div>
  );
};

export default Header;
