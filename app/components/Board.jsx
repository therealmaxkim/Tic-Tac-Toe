const React = require("react");
const Block = require("./Block.jsx");
const style = require('../css/styles.css');

function Board(props) {

  //Keep track of game state in an array of size 9. It will have 'X' or 'O' or null.
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  //Keep track of whose turn it in. By default, X will go first. 
  const [XTurn, setXTurn] = React.useState(true);

  //Mark a block as 'X' or 'O', given that it has not been filled and no winner yet.
  function handleClick(i) {
    const squares2 = squares.slice();
    if (squares2[i] || checkWin(squares2)) {
      return;
    }
    if (XTurn) {
      squares2[i] = 'X';
    } else {
      squares2[i] = 'O';
    }
    setSquares(squares2);
    setXTurn(!XTurn);
  }

  //check for 8 possible wins and also that the board is not empty
  function checkWin(squares) {
    /* index positions on the board
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
    */
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for (var i=0; i<8; i++) {
      var x = wins[i][0]; 
      var y = wins[i][1];
      var z = wins[i][2];
      if (squares[x] === squares[y] && squares[y] === squares[z] && squares[z] !== null && squares[y] !== null && squares[x] !== null) {
        return squares[x];
      }
    }
    return null;
  }

  //a function that will return a Block with the appropriate mark and an onclick function
  //Each block will be assigned a specific index in the game state array. 0 to 8. 
  function showBlock(i) {
    return (<Block value={squares[i]} onClick={() => handleClick(i)}/>);
  }

  //a function that will reset the board and make it X's turn since X goes first.
  function resetGame() {
    newSquares = Array(9).fill(null);
    setSquares(newSquares);
    setXTurn(true);
  }

  //text to say whose turn it in
  var status = "'s turn to move";
  //variable that checks if someone won. It will be null, X, or O. 
  const winner = checkWin(squares);

  return (
    <div>
      <div className="row">
        <div className="header">
          {(winner) ? ('Winner is ' + winner) : ((XTurn ? 'X' : 'O') + status)}
        </div>
      </div>
      
      <div className="center">
        <div className="row">
          {showBlock(0)} {showBlock(1)} {showBlock(2)}
        </div>
        <div className="row">
          {showBlock(3)} {showBlock(4)} {showBlock(5)}
        </div>
        <div className="row">
          {showBlock(6)} {showBlock(7)} {showBlock(8)}
        </div>
      </div>

      <div className="row">
        <button className="bottom" onClick={resetGame}>
          Click here to reset the game
        </button>
      </div>
    </div>
  );
}

module.exports = Board;





               