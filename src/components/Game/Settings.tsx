import type { RootState } from '@@store/index';

import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { Tooltip, Modal, ToggleSwitch } from '@@components/Common';

function Settings() {

    const [visible, setVisible] = useState(false);
    const gameState = useSelector((state: RootState) => state.gameState);
    const dispatch = useDispatch();

    const handleChange = (value: boolean) => {
        dispatch(gameStateActions.updateSettings({
            ...gameState.settings,
            dirtyRummy: value
        }));
    };

    return(
        <React.Fragment>
            <Tooltip content="Settings" placement="bottom">
                <motion.div 
                    className="hover:cursor-pointer" 
                    whileHover={{
                        y: "-.5vh"
                    }}
                    onClick={() => setVisible(true)}
                >
                    <FaCog className="text-xl text-muted" />
                </motion.div>
            </Tooltip>
            <Modal motionKey="next-round-modal" visible={visible} setVisible={setVisible}>
                <div className="flex justify-center">
                    <div className="flex flex-col gap-10 w-full md:w-1/2 text-center">
                        <h1 className="text-3xl font-bold">Settings</h1>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <p className="font-semibold">Dirty Rummy</p>
                                <ToggleSwitch value={gameState.settings.dirtyRummy} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default Settings;