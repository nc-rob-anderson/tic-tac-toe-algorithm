Welcome to Tic-Tac-Toe with AI! This project allows you to play Tic-Tac-Toe against a computer.

Clone the Repository:
`git clone https://github.com/robert112233/tic-tac-toe-algorithm.git`

Run the Game:
`npm install && npm run dev`

The computer will respond with its moves based on its evaluation algorithm.
Continue until game ends in a win or a draw.
The computer evaluates each possible move using a rating system based on certain conditions:

- Winning Move: If there's a move that can lead to an immediate win, the computer will prioritize it.
- Blocking Move: If the opponent has a winning move on the next turn, the computer will prioritize blocking it.
- Forking Move: The computer looks for opportunities to create multiple winning paths to force the opponent into a losing position.
- Center Occupancy: Occupying the center square is considered advantageous, so the computer may prioritize moves that secure it.
- Corner Occupancy: If the center is unavailable, occupying a corner square is the next best move.

Contributions to this project are welcome! If you have ideas for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.
