import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  SearchForm,
  SearchIconWrapper,
  StyledInputBase,
} from "../assets/style/SearchNavBarStyle";

interface SearchNavBar {
  onSubmit?: (searchText: string) => void;
}

export const SearchNavBar: FC<SearchNavBar> = ({ onSubmit }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit && onSubmit(formData);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={formData}
        onChange={handleChange}
        placeholder="Search game…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchForm>
  );
};
