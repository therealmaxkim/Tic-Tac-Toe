const React = require("react");
//const util = require("../logic/util.js");
//const Clockface = require("./clockface.jsx");
const Block = require("./Block.jsx");
const Board = require("./Board.jsx");
const style = require('../css/styles.css');

function PageRoute() {
  //const date = new Date();
  /*
  const [date, setDate] = React.useState(new Date());
  const [count, setCount] = React.useState(0);
  // usestate returns a variable and a setter. it takes a starting value as an argument 
  
  const doIncrement = () => {
    setCount(count + 1); 
  }
  
  const setTime = () => {
    setDate(new Date());
  }
  
  //updates the setTime every second. Automatically updates the timer every second. 
  //call this function whenver this function updates. The function inside useEffect will only be called once. 
  //want to do this because this entire function PageRoute is run every time it re renders. A new timer gets added each time. 
  //So inside of the useEffect runs once. 
  React.useEffect(() => {
    setInterval( setTime, 1000 )
  }, [] );
  
  
  return (
    <div>
      <h1>This is my homepage. Welcome! It belongs to {util.getName()}</h1>
      <Clockface hours={date.getHours()} minutes={date.getMinutes()} seconds={date.getSeconds()}/>
      <button onClick={setTime}>Fetch Time</button>
      <h2>The current count is: {count}</h2>
      <button onClick={doIncrement}>Click me!</button>
    </div>
  );
  */
  return (
    <div>
      <Board />
    </div>
  );
}

module.exports = PageRoute;


