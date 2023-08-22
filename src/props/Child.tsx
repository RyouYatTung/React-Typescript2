interface ChildProps {
  color: string;
  onclick(): void;
}

export const Child = ({ color, onclick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onclick}>click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onclick }) => {
  return (
    <div>
      {color}
      <button onClick={onclick}>click me</button>
    </div>
  );
};
