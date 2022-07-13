import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from "moment";
import { hackDataContext } from "../../providers/HackDataProvider";
import ChipsList from "../ChipsList/ChipsList";
import "./HackListItem.css";

export default function HackListItem(props) {
  const { hackItem } = props;

  const { handleUpVotePress, hasEmployeeUpVoted } = useContext(hackDataContext);

  const handleUpVote = (singleHackItem) => {
    handleUpVotePress(singleHackItem);
  };
  let hasUpVoted = hasEmployeeUpVoted(hackItem);
  return (
    <Card sx={{ minWidth: 400, maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#9c27b0" }} aria-label="recipe">
            {(hackItem.createdBy[0] + hackItem.createdBy[1]).toUpperCase()}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={hackItem.title}
        subheader={
          "Added on " +
          moment(hackItem.createdAt).format("MMMM d, YYYY, h:mm a")
        }
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {hackItem.description}
        </Typography>
      </CardContent>
      <ChipsList tags={hackItem.tags} />
      {/* <div className="cardActionsContainer"> */}
      <CardActions>
        <IconButton
          aria-label="ThumbUp"
          color={hasUpVoted ? "primary" : "inherit"}
          size="small"
          onClick={() => handleUpVote(hackItem)}
        >
          <span style={{ paddingRight: 5 }}>
            {hasUpVoted ? "UpVoted" : "UpVote"}
          </span>
          <ThumbUpIcon />
          <span style={{ paddingLeft: 5 }}>{hackItem.upVoteCount}</span>
        </IconButton>
        <div className="createdByContainer">
          <Typography variant="body1" color="text.secondary">
            {"Created By : " + hackItem.createdBy}
          </Typography>
        </div>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
      {/* </div> */}
    </Card>
  );
}
