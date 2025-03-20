import { createSignal } from 'solid-js';
import './App.css';

export default () => {
  const [num, setNum] = createSignal(0);

  return (
    <>
      <h1>Hello, Solid!</h1>
      <p>{num()}</p>
      <button onClick={() => setNum(num() + 1)}>Increment</button>
    </>
  )
}