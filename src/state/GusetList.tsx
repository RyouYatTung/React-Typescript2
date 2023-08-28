import { useState,createContext } from "react";
// import UserSearch from "./UserSearch";

const GusetList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
    console.log(guests);
  };

  //useContext
  // const UserSearch =()=> <UserSearch/>
  // export const UserContext = createContext()

  return (
    <>
      <h1>GusetList</h1>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </>
  );
};

export default GusetList;
