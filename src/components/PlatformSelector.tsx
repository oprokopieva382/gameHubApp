import { FC, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Platform, usePlatforms } from "./hooks/usePlatforms";
import { errorMessage } from "../utils/notification";

interface PlatformSelectorProps {
  platform: Platform | null;
  setPlatform: (platform: Platform) => void;
}

export const PlatformSelector: FC<PlatformSelectorProps> = ({
  platform,
  setPlatform,
}) => {
  const { data, error } = usePlatforms();
  const handleChange = (event: SelectChangeEvent) => {
    const selectedPlatformName = event.target.value;
    const selectedPlatform = data.find((p) => p.name === selectedPlatformName);

    if (selectedPlatform) {
      setPlatform(selectedPlatform);
    }
  };

  useEffect(() => {
    if (error) {
      errorMessage("Something went wrong");
    }
  }, [error]);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="simple-select-standard-label">Platforms</InputLabel>
      <Select
        labelId="simple-select-standard-label"
        id="simple-select-standard"
        value={platform?.name || ""}
        onChange={handleChange}
        label="Platform"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            value={platform.name}
            key={platform.id}
            onClick={() => setPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
