import { TbCardsFilled } from 'react-icons/tb';

import Settings from './Settings';
import RulesLink from './RulesLink';

export interface RoundHeaderProps {
    round: number
};

function RoundHeader({ round }: RoundHeaderProps) {

    return(
        <div className="flex items-center justify-center">
            <div className="">
                <Settings />
            </div>
            <div className="flex flex-1 gap-2 justify-center items-center">
                <TbCardsFilled className="text-5xl" />
                <h1 className="text-4xl uppercase font-bold">Round {round}</h1>
            </div>
            <div className="">
                <RulesLink />
            </div>
        </div>
    );
};

export default RoundHeader;