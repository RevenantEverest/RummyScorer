import type { Player, ScoreHistory } from '@@types/gameState';
import type { NextRoundFormHelpers, NextRoundFormValues } from '@@components/Forms/NextRoundForm';

import React, { useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { Tooltip, Button, Modal, ToastSuccess } from '@@components/Common';
import NextRoundForm from '@@components/Forms/NextRoundForm';

export interface NextRoundProps {
    players: Player[]
};

function NextRound({ players }: NextRoundProps) {

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (values: NextRoundFormValues, helpers: NextRoundFormHelpers) => {

        /* Prevents mutation of redux state */
        const keys = Object.keys(values).sort();
        const updatedPlayers: Player[] = [];

        for(let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];

            const player = players[Number(currentKey)];
            const newScore = Number(values[currentKey]);
            const scoreHistoryEntry: ScoreHistory = {
                started: player.score,
                gained: newScore
            };

            updatedPlayers.push({
                id: player.id,
                name: player.name,
                score: player.score + newScore,
                scoreHistory: [...player.scoreHistory, scoreHistoryEntry]
            })
        };

        dispatch(gameStateActions.nextRound(updatedPlayers));

        helpers.setSubmitting(false);

        toast((t) => (
            <ToastSuccess toast={t} message="New Round Started!" />
        ));

        setVisible(false);
    };

    return(
        <React.Fragment>
            <Tooltip content="Next Round" placement="right">
                <Button 
                    className="py-3 rounded-full shadow-xl"
                    onClick={() => setVisible(true)}
                >
                    <FaHandPointRight className="text-lg absolute" />
                </Button>
            </Tooltip>
            <Modal motionKey="next-round-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2">
                        <NextRoundForm players={players} onSubmit={onSubmit} />
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default NextRound;