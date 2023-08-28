import "./App.css";
import GusetList from "./state/GusetList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

function App() {
  return (
    <>
      <GusetList />
      <UserSearch />
      <EventComponent />
    </>
  );
}

export default App;
