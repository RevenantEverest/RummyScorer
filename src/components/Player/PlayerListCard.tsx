import type { Player, Settings } from '@@types/gameState';

import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Card } from '@@components/Common';
import { FaCrown, FaMedal } from 'react-icons/fa6';
import DirtyRummyActions from './DirtyRummyActionsList';

export interface PlayerCardProps {
    player: Player,
    rank: number,
    settings: Settings
};

function PlayerListCard({ player, rank, settings }: PlayerCardProps) {

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

    const getContainerClassNames = () => {
        if(settings.dirtyRummy) {
            return "flex flex-col md:flex-row gap-4 md:gap-10 items-center";
        }

        return "flex gap-4 md:gap-10 items-center";
    };

    return(
        <motion.div>
            <Link to={`/game/players/${player.id}`}>
                <Card className="w-full">
                    <div className={getContainerClassNames()}>
                        <div className="flex flex-1 items-center">
                            {renderRank()}
                            <h1 className="font-semibold text-xl flex-1">{player.name}</h1>
                        </div>
                        {
                            settings.dirtyRummy && 
                            <div>
                                <DirtyRummyActions noLegends withTooltip player={player} />
                            </div>
                        }
                        <div>
                            <p className="text-accent font-semibold text-xl text-right">{player.score}</p>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
};

export default PlayerListCard;