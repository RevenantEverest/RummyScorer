import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa6';

import { Tooltip } from '@@components/Common';

function RulesLink() {

    return(
        <Link to="/rules">
            <Tooltip content="Rules" placement="bottom">
                <motion.div
                    whileHover={{
                        y: "-.5vh"
                    }}
                >
                    <FaBookOpen className="text-xl text-muted" />
                </motion.div>
            </Tooltip>
        </Link>
    );
};

export default RulesLink;