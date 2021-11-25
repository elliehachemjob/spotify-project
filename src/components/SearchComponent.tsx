import React from "react";
import { Input } from "@mui/material";

interface Props {
  searchQuery?: string;
  onChange?: any;
}

function SearchComponent(props: Props) {
  return <Input value={props.searchQuery} onChange={props.onChange} />;
}

export default SearchComponent;
