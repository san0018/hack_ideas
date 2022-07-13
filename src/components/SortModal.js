import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Fab from "@mui/material/Fab";
import SortIcon from "@mui/icons-material/Sort";
import { hackDataContext } from "../providers/HackDataProvider";

export default function Sort() {
  const [open, setOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("");
  const [displayedSort, setDisplayedSort] = React.useState("");

  const { handleSort } = useContext(hackDataContext);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleSubmit = () => {
    handleSort(sortBy);
    setDisplayedSort(sortBy);
    handleClose();
  };

  const handleSortDisplay = () => {
    if (displayedSort.includes("Votes")) {
      return "Votes Count";
    } else if (displayedSort.includes("Created")) {
      return "Created At";
    } else {
      return "Sort By";
    }
  };

  return (
    <div>
      <Fab
        variant="extended"
        color="secondary"
        onClick={handleClickOpen}
        aria-label="sort"
      >
        <SortIcon sx={{ mr: 1 }} />
        {handleSortDisplay()}
      </Fab>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>How do you want to sort ?</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Sort By
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sortBy}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Votes Count"}>Votes Count</MenuItem>
                <MenuItem value={"Created At"}>Created At</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
