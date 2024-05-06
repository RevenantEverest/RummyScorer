import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Tooltip } from '@@components/Common';
import SettingsModal from './SettingsModal';

function SettingsIcon() {
    const [visible, setVisible] = useState(false);
     

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
            <SettingsModal visible={visible} setVisible={setVisible} />
        </React.Fragment>
    );
};

export default SettingsIcon;