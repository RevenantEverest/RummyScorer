import type { Player, DirtyRummyActions } from '@@types/gameState';

import DirtyRummyActionPoint from './DirtyRummyActionPoint';
import DirtyRummyActionLabel from './DirtyRummyActionLabel';

export interface DirtyRummyActionsProps {
    player: Player,
    noLegends?: boolean,
    editable?: boolean,
    withTooltip?: boolean
};

function DirtyRummyActionList({ player, noLegends, editable, withTooltip }: DirtyRummyActionsProps) {

    const actionDisplayNames: Record<keyof DirtyRummyActions, string> = {
        "switchHands": "Switch Hands",
        "stealMeld": "Steal Meld",
        "reDrawHand": "Re-Draw Hand",
        "goFishCard": "Go Fish"
    };

    const renderActions = () => {
        return Object.keys(player.dirtyRummyActions).map((action, index) => {
            const actionKey = action as keyof DirtyRummyActions;
            const title = actionDisplayNames[actionKey];
            return(
                <div 
                    key={`dra-player-${player.id}-${action}-${index}`}
                    className="flex flex-col gap-2 items-center"
                >
                    <DirtyRummyActionPoint 
                        actionKey={actionKey} 
                        title={title} 
                        player={player} 
                        editable={editable}
                        withTooltip={withTooltip}
                    />
                    {!noLegends && <DirtyRummyActionLabel title={title} /> }
                </div>
            );    
        });
    };

    return(
        <div className="flex gap-3 md:gap-4 justify-center items-center">
            {renderActions()}
        </div>
    );
};

export default DirtyRummyActionList;