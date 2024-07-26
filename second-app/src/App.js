import './App.css';
import Click from './exercises/Click';
import Joke from './exercises/Joke';
import Mouse from './hooks/UseEffectHook3';
import UseEffectHook from './hooks/UseEffectHook';
import UseEffectHook2 from './hooks/UseEffectHook2';
import UseEffectHook4 from './hooks/UseEffectHook4';
import UseStateHook from './hooks/UseStateHook';
import UseEffectHook5 from './hooks/UseEffectHook5';

function App() {
  return (
    <>
      {/* <Joke question='what is react' punchline='Search on google' /> */}
      {/* <Joke question='what is django' punchline='Search on google' /> */}
      {/* <Joke question='what is javascript' punchline='Search on google' /> */}
      {/* <Click name='click me'/> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHook2 /> */}
      <UseEffectHook5 />
      {/* <Mouse /> */}
      {/* <UseEffectHook4 /> */}
    </>
  );
}

export default App;
