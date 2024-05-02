import type { GameState } from '@@types/gameState';

function newGame(state: GameState) {
    state = {
        round: 1,
        players: [],
        settings: state.settings
    };

    return state;
};

export default newGame;