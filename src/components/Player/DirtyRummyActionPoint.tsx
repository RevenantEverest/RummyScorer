import type { DirtyRummyActions, Player } from '@@types/gameState';
import type { IconType } from 'react-icons';

import { useDispatch } from 'react-redux';
import { FaHandsHelping } from "react-icons/fa";
import { FaUserNinja, FaFish } from 'react-icons/fa6';
import { GiCardDraw } from "react-icons/gi";

import { Tooltip } from '@@components/Common';
import { gameStateActions } from '@@store/actions';

export interface DirtyRummyActionPointProps {
    actionKey: keyof DirtyRummyActions,
    player: Player,
    title: string,
    editable?: boolean,
    withTooltip?: boolean
};

function DirtyRummyActionPoint({ actionKey, player, title, editable, withTooltip }: DirtyRummyActionPointProps) {

    const dispatch = useDispatch();
    const usedAction = player.dirtyRummyActions[actionKey];

    const actionIcons: Record<keyof DirtyRummyActions, IconType> = {
        "switchHands": FaHandsHelping,
        "stealMeld": FaUserNinja,
        "reDrawHand": GiCardDraw,
        "goFishCard": FaFish
    };

    const Icon = actionIcons[actionKey];

    const updateAction = (actionKey: keyof DirtyRummyActions, usedAction: boolean) => {
        const actions: DirtyRummyActions = {
            ...player.dirtyRummyActions
        };

        actions[actionKey] = !usedAction;

        dispatch(gameStateActions.updatePlayer({
            ...player,
            dirtyRummyActions: actions
        }));
    };

    return(
        <Tooltip
            content={title}
            placement="top"
            className={`${!withTooltip && "hidden"}`}
        >
            <div 
                className={`
                    flex items-center justify-center h-7 w-7 rounded-full z-50 relative
                    ${usedAction ? "bg-primary" : "bg-muted"}
                    ${editable && "hover:cursor-pointer"}
                `}
                onClick={() => {
                    editable && updateAction(actionKey, usedAction);
                }}
            >
                <Icon className={`text-md`} />
            </div>
            {
                usedAction && 
                <div className="relative z-10">
                    <div className="h-7 w-7 rounded-full absolute bg-primary blur-sm bottom-0 z-10" />
                </div>
            }
        </Tooltip>
    );
};

export default DirtyRummyActionPoint;