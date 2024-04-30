
import type { Player } from '@@types/gameState';

import React, { useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { Tooltip, Button, Modal, ToastSuccess } from '@@components/Common';

export interface NextRoundProps {
    players: Player[]
};

function ResetGame() {

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const resetGame = () => {

        dispatch(gameStateActions.resetGame());

        toast((t) => (
            <ToastSuccess toast={t} message="Game Reset!" />
        ));

        setVisible(false);
    };

    return(
        <React.Fragment>
            <Tooltip content="Reset Game" placement="bottom">
                <Button 
                    className="py-3 rounded-full shadow-xl"
                    onClick={() => setVisible(true)}
                >
                    <IoMdRefresh className="text-lg absolute" />
                </Button>
            </Tooltip>
            <Modal motionKey="reset-game-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="w-full md:w-6/12 flex flex-col gap-10">
                        <div className="text-center">
                            <h1 className="font-bold text-3xl mb-4">Are you sure you want to reset the game?</h1>
                            <p className="font-semibold text-muted">
                                Players will remain but have their scores reset to 
                                <span className="text-accent ml-1">0</span>
                                .
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Button className="flex-1" onClick={resetGame}>
                                <p className="font-semibold">Yes</p>
                            </Button>
                            <Button outlined className="flex-1" onClick={() => setVisible(false)}>
                                <p className="font-semibold">Cancel</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default ResetGame;