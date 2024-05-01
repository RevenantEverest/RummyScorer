import type { Player } from '@@types/gameState';
import type { EditPlayerFormHelpers, EditPlayerFormValues } from '@@components/Forms/EditPlayerForm';

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { Tooltip, Button, Modal, ToastSuccess } from '@@components/Common';
import EditPlayerForm from '@@components/Forms/EditPlayerForm';

export interface EditPlayerProps {
    player: Player
};

function EditPlayer({ player }: EditPlayerProps) {

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (values: EditPlayerFormValues, helpers: EditPlayerFormHelpers) => {
        const newPlayer: Player = {
            id: player.id,
            name: values.name,
            score: player.score,
            scoreHistory: player.scoreHistory
        };

        dispatch(gameStateActions.updatePlayer(newPlayer));

        helpers.setSubmitting(false);

        toast((t) => (
            <ToastSuccess toast={t} message="Player updated!" />
        ));

        setVisible(false);
    };

    return(
        <React.Fragment>
            <Tooltip content="Edit Player" placement="left">
                <Button 
                    className="py-3 rounded-full shadow-xl"
                    onClick={() => setVisible(true)}
                >
                    <FaEdit className="text-lg absolute" />
                </Button>
            </Tooltip>
            <Modal motionKey="add-player-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2">
                        <EditPlayerForm player={player} onSubmit={onSubmit} />
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default EditPlayer;