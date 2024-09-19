"use no memo"
import "./App.css";
import { FriendList } from "./FriendList.tsx";

function App() {
  return (
    <FriendList
      friends={[
        { id: "0", name: "Holger" },
        { id: "1", name: "Stefan" },
      ]}
    />
  );
}

export default App;
