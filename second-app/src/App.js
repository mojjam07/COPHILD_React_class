import './App.css';
import Click from './Click';
import Joke from './Joke';

function App() {
  return (
    <>
      <Joke question='what is react' punchline='Search on google' />
      <Joke question='what is django' punchline='Search on google' />
      <Joke question='what is javascript' punchline='Search on google' />
      <Click />
    </>
  );
}

export default App;
