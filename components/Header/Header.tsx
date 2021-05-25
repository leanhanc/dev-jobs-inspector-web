import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useLazyQuery } from "@apollo/client";

// Components
import Button from "components/Button";

import TypeaheadInput from "components/TypeaheadInput";
import SelectInput from "components/SelectInput";

// Data
import { findJobs } from "graphql/jobs";

// Assets
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";

// Styles
import styles from "./Header.module.sass";

const JOBS_PER_PAGE = 20;

interface HeaderProps {
  currentPage: number;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [callFindJobs, { data: findJobsData, loading: findJobsLoading }] = useLazyQuery<
    FindJobsResponse,
    FindJobsVariables
  >(findJobs, {
    fetchPolicy: "network-only",
  });

  const handleSearch = useCallback(() => {
    callFindJobs({
      variables: {
        page: currentPage,
        limit: JOBS_PER_PAGE,
        search: searchTerm,
      },
    });
  }, [searchTerm, callFindJobs, currentPage, searchTerm]);

  console.log(findJobsData);

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
          <TypeaheadInput
            placeholder="Área, lenguaje o framework"
            Icon={searchIcon}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <SelectInput placeholder="Argentina" Icon={locationIcon} />
        </fieldset>

        <Button type="button" style={styles.HeaderCta} onClick={handleSearch}>
          BUSCAR
        </Button>
      </div>
    </div>
  );
};

export default Header;
