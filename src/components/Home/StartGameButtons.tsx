import type { Player } from '@@types/gameState';

import { Link, useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';

import { gameStateActions } from '@@store/actions';

import { Button } from '@@components/Common';

export interface StartGameButtonsProps {
    players: Player[]
};

function StartGameButtons({ players }: StartGameButtonsProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startNewGame = () => {
        dispatch(gameStateActions.newGame());

        navigate({ to: "/game" });
    };

    return(
        <div className="flex flex-col gap-4">
            <Button className="w-full" onClick={startNewGame}>
                <p className="font-semibold">Start New Game</p>
            </Button>
            {
                players.length > 0 &&
                <Link to="/game" className="w-full">
                    <Button color="accent" className="w-full">
                        <p className="font-semibold">Resume Game</p>
                    </Button>
                </Link>
            }
        </div>
    );
};

export default StartGameButtons;