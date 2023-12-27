import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FC } from "react";
interface SortSelectorProps {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

export const SortSelector: FC<SortSelectorProps> = ({
  onSelectSortOrder,
  sortOrder,
}) => {
  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
      <InputLabel id="simple-select-standard-label">
        Order by
      </InputLabel>
      <Select
        labelId="simple-select-standard-label"
        id="simple-select-standard"
        value={sortOrder || ""}
        onChange={(e) => onSelectSortOrder(e.target.value as string)}
        label="Order by"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {sortOrders.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
        ))
      </Select>
    </FormControl>
  );
};
