import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import  {useState}  from "react";

export const SortSelector = () => {
  const [sortSelect, setSortSelect] = useState("Relevant");
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
      <InputLabel id="simple-select-standard-label">
        Order by: Relevance
      </InputLabel>
      <Select
        labelId="simple-select-standard-label"
        id="simple-select-standard"
        // value="Relevant"
        // onChange={() => {}}
        label="Order by: Relevance"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem>Relevant</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
        ))
      </Select>
    </FormControl>
  );
};
