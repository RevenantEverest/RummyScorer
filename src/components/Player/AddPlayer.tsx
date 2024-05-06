import type { Player } from '@@types/gameState';
import type { AddPlayerFormHelpers, AddPlayerFormValues } from '@@components/Forms/AddPlayerForm';

import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { Tooltip, Button, Modal, ToastSuccess } from '@@components/Common';
import AddPlayerForm from '@@components/Forms/AddPlayerForm';

export interface AddPlayerProps {
    playerCount: number
};

function AddPlayer({ playerCount }: AddPlayerProps) {

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (values: AddPlayerFormValues, helpers: AddPlayerFormHelpers) => {
        const newPlayer: Player = {
            id: playerCount,
            name: values.name,
            score: 0,
            dirtyRummyActions: {
                switchHands: false,
                stealMeld: false,
                reDrawHand: false,
                goFishCard: false
            },
            scoreHistory: []
        };

        dispatch(gameStateActions.addPlayer(newPlayer));

        helpers.setSubmitting(false);

        toast((t) => (
            <ToastSuccess toast={t} message="Player created!" />
        ));

        setVisible(false);
    };

    return(
        <React.Fragment>
            <Tooltip className="hidden md:block" content="Add Player" placement="bottom">
                <Button 
                    className="py-3 rounded-full shadow-xl"
                    onClick={() => setVisible(true)}
                >
                    <FaUserPlus className="text-lg absolute" />
                </Button>
            </Tooltip>
            <Modal motionKey="add-player-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2">
                        <AddPlayerForm onSubmit={onSubmit} />
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default AddPlayer;