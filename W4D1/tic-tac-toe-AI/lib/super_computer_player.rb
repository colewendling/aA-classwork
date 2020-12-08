require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer      # Class - Inheritance - Carlos's lecture W4D2
  def move(game, mark)
    node = TicTacToeNode.new(game.board, mark)
    possible_moves = node.children.shuffle

    node = possible_moves.find { |child| child.winning_node?(mark) }
    return node.prev_move_pos if node
    node = possible_moves.find { |child| !child.losing_node?(mark) }
    return node.prev_move_pos if node
    raise "I'm going to lose."
  end
end

if $PROGRAM_NAME == __FILE__
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Cole")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
