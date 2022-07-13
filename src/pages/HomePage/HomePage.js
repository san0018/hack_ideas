import Header from "../../components/Header";
import HackList from "../../components/HackList/HackList";
import SortModal from "../../components/SortModal";
import AddHackModal from "../../components/AddHackModal/AddHackModal";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homeStyle">
      <Header />
      <HackList />
      <div className="sortModalStyles">
        <SortModal />
      </div>
      <div className="addModalStyles">
        <AddHackModal />
      </div>
    </div>
  );
}

export default HomePage;
