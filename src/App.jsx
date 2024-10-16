import './App.css'
import Counter from './counter'
import Player from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2 = () => {
    alert('Handled')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={() =>{alert('Third')}}>Third</button>
      <button onClick={() => addToFive(6)}>Four</button>
    </>
  )
}

export default App
