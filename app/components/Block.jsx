const React = require("react");
const style = require('../css/styles.css');

function Block(props) {
  //Blocks have 3 things. The current value of the game state in "props.value", and a 
  //function "props.onClick" that will handle changing game state when clicking. 
  //The color of the text is based on the current game state. 
  return (
    <button className={(props.value === 'X') ? "xblock" : "oblock"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

module.exports = Block;





               