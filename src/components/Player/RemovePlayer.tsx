import type { Player } from '@@types/gameState';

import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { Tooltip, Button, Modal, ToastSuccess } from '@@components/Common';
import { gameStateActions } from '@@store/actions';

export interface RemovePlayerProps {
    player: Player
};

function RemovePlayer({ player }: RemovePlayerProps) {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemovePlayer = () => {

        dispatch(gameStateActions.removePlayer(player.id));

        toast((t) => (
            <ToastSuccess toast={t} message="Player removed successfully!" />
        ));

        setVisible(false);
        navigate({ to: "/game" });
    };

    return(
        <React.Fragment>
            <Tooltip className="hidden md:block" content="Remove Player" placement="right">
                <Button 
                    className="py-3 rounded-full shadow-xl"
                    onClick={() => setVisible(true)}
                >
                    <FaTrashAlt className="text-lg absolute" />
                </Button>
            </Tooltip>
            <Modal motionKey="add-player-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="flex flex-col gap-8 w-full md:w-1/2">
                        <h1 className="font-bold text-3xl text-center">
                            Are you sure you want to remove
                            <span className="ml-1 text-accent">{player.name}</span>
                            ?
                        </h1>
                        <div className="flex gap-4">
                            <Button className="flex-1" onClick={handleRemovePlayer}>
                                <p className="font-semibold">Yes</p>
                            </Button>
                            <Button className="flex-1" color="accent" onClick={() => setVisible(false)}>
                                <p className="font-semibold">Close</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default RemovePlayer;