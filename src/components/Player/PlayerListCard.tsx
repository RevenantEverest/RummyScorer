import type { Player } from '@@types/gameState';

import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Card } from '@@components/Common';
import { FaCrown, FaMedal } from 'react-icons/fa6';

export interface PlayerCardProps {
    player: Player,
    rank: number 
};

function PlayerListCard({ player, rank }: PlayerCardProps) {

    const renderRank = () => {

        const rankClass = "font-semibold mr-2 relative -top-0.5";

        if(rank === 1) {
            return(
                <FaCrown className={`${rankClass} text-3xl text-primary`} />
            );
        }

        if(rank === 2) {
            return(
                <FaMedal className={`${rankClass} text-3xl text-accent`} />
            );
        }

        return null;
    };

    return(
        <motion.div>
            <Link to={`/game/players/${player.id}`}>
            <Card className="w-full">
                <div className="flex items-center">
                    <div className="flex-1 flex items-center">
                        {renderRank()}
                        <h1 className="font-semibold text-xl flex-1">{player.name}</h1>
                    </div>
                    <p className="text-accent font-semibold text-xl">{player.score}</p>
                </div>
            </Card>
            </Link>
        </motion.div>
    );
};

export default PlayerListCard;