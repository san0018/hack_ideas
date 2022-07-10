import "./CustomActionBar.css";
import SortModal from "./SortModal";
import AddHackModal from "./AddHackModal";
const CustomActionBar = () => {
  return (
    <div className="actionBarContainer">
      <SortModal />
      <AddHackModal />
    </div>
  );
};

export default CustomActionBar;
