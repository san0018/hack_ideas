import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ChipSelect from "./ChipSelect";
import "./AddHackModel.css";
import { hackDataContext } from "../providers/HackDataProvider";

export default function AddHackModal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tags, setTags] = React.useState([]);
  const [description, setDescription] = useState("");
  const [showTitleError, setShowTitleError] = useState(false);
  const [showTagError, setShowTagError] = React.useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const { updateHackData } = useContext(hackDataContext);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    if (newTitle.length < 3 && showTitleError === false) {
      setShowTitleError(true);
    } else if (newTitle.length >= 3 && showTitleError === true) {
      setShowTitleError(false);
    }
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    if (newDescription.length < 10 && showDescriptionError === false) {
      setShowDescriptionError(true);
    } else if (newDescription.length >= 10 && showDescriptionError === true) {
      setShowDescriptionError(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setTags([]);
    setShowTitleError(false);
    setShowDescriptionError(false);
    setShowTagError(false);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      closeModal();
    }
  };

  const handleTagSelect = (event) => {
    const {
      target: { value },
    } = event;
    // console.log("here", value);
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (value.length < 1 && showTagError === false) {
      setShowTagError(true);
    } else if (value.length >= 1 && showTagError === true) {
      setShowTagError(false);
    }
  };

  const isDisabled = () => {
    if (title.length < 3 || description.length < 10 || tags.length < 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const date = new Date();
    let newHackData = {
      id: date + title,
      title: title,
      description: description,
      tags: tags,
      isUpVoted: false,
      upVoteCount: 0,
      createdAt: date,
    };
    updateHackData(newHackData);
    closeModal();
  };

  return (
    <div>
      <Fab
        variant="extended"
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add Hack Idea
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please add your Hack Idea !</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            variant="standard"
            error={showTitleError}
            helperText={
              showTitleError ? "Please enter atleast 3 characters !" : null
            }
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            // type="textarea"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            variant="standard"
            multiline={true}
            minRows={3}
            maxRows={8}
            error={showDescriptionError}
            helperText={
              showDescriptionError
                ? "Please enter atleast 10 characters !"
                : null
            }
          />
          <div
            style={{
              paddingTop: 20,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div className="containerTwo">
              <ChipSelect
                tags={tags}
                handleTagSelect={handleTagSelect}
                showTagError={showTagError}
              />
              <div>
                {showTagError && (
                  <div className="errorStyle">
                    Please select atleast 1 tag !
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isDisabled()}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
