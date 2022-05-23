import React from "react";
import { SearchBarStyle } from "./style";
import { Input } from "../index";
import { ReactComponent as SearchSvg } from "../../assets/svg/searchsvg.svg";
import useForm from "../../Hooks/useForm";

const SearchBar = ({width, placeholder}) => {
  const search = useForm();

  return (
    <SearchBarStyle width={width}>
      <Input type="search" placeholder={placeholder} width="100%" {...search} />
      <SearchSvg />
    </SearchBarStyle>
  );
};

export default SearchBar;
