import { Child } from "./Child";

export const Parent = () => {
  return <Child color="red" onclick={() => console.log("clicked")} />;
};
