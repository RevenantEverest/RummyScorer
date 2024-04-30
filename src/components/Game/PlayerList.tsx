import type { Player } from '@@types/gameState';

import { FaFaceFrown } from 'react-icons/fa6';
import PlayerListCard from './PlayerListCard';

export interface PlayerListProps {
    players: Player[]
};

function PlayerList({ players }: PlayerListProps) {

    const renderPlayers = () => {
        const playerSort = [...players].sort((a, b) => b.score - a.score);

        const Players = playerSort.map((player, index) => (
            <PlayerListCard key={`player-${index}`} player={player} rank={index + 1} />
        ));

        if(Players.length > 0) {
            return Players;
        }

        return(
            <div className="flex flex-col gap-2 items-center justify-center pt-10">
                <FaFaceFrown className="text-2xl" />
                <p className="font-semibold">No players</p>
            </div>
        );
    };

    return(
        <div className="w-full flex flex-col gap-6">
            {renderPlayers()}
        </div>
    );
};

export default PlayerList;