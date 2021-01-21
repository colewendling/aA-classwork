const View = require('./ttt-view');// require appropriate file
const Game = require('../../tic_tac_toe_node_solution/game');

// require appropriate file

  $(() => {
    const rootEl = $('.ttt');
    const game = new Game();
    new View(game, rootEl);
    // Your code here
  });
