import { useRef } from 'react';

const UseRef = () => {
    const inputEl = useRef<HTMLInputElement  | null>(null);
  return (
    <>
    <input ref={inputEl} type="text"  />
    <button onClick={()=>inputEl.current.focus()}>me</button>
    </>
  )
}

export default UseRef