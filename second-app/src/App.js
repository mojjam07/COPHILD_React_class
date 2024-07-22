import './App.css';
import Joke from './Joke';

function App() {
  return (
    <>
      <Joke question='what is react' punchline='Search on google' />
      <Joke question='what is django' punchline='Search on google' />
      <Joke question='what is javascript' punchline='Search on google' />
    </>
  );
}

export default App;
