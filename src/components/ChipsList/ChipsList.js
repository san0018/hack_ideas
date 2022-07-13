import "./ChipsList.css";
import Chip from "@mui/material/Chip";
const ChipsList = (props) => {
  const { tags } = props;
  // let tags = ["hey,hello", "hi", "bye"];
  return (
    <div className="chipContainer">
      <ul className="ulStyleOne">
        {tags.map((tag) => {
          return (
            <li key={tag} className="listItemStyles">
              <Chip label={tag} color="primary" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipsList;
