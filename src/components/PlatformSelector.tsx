import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { usePlatforms } from "./hooks/usePlatforms";

export const PlatformSelector = () => {
  const [platform, setPlatform] = useState("");

  const { data } = usePlatforms();

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="simple-select-standard-label">Platform</InputLabel>
      <Select
        labelId="simple-select-standard-label"
        id="simple-select-standard"
        value={platform}
        onChange={handleChange}
        label="Platform"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((platform) => (
          <MenuItem value={platform.name} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
