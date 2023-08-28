import { useState,useRef } from "react";

const users = [{ name: "aaaa" }, { name: "bbbb" }, { name: "cccc" }];

const UserSearch:React.FC = () => {
  const imputRef= useRef<HTMLInputElement  | null>()
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string }|undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <>
      <h1>userSearch</h1>
      <input ref={imputRef} type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      <div>{user&&user.name}</div>
    </>
  );
};

export default UserSearch;
