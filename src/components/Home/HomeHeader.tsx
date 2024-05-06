import { TbCardsFilled } from 'react-icons/tb';

import SettingsIcon from '@@components/Settings/SettingsIcon';
import RulesLink from '@@components/Game/RulesLink';

function HomeHeader() {

    return(
        <div className="flex items-center justify-center w-full">
            <div>
                <SettingsIcon />
            </div>
            <div className="flex flex-1 flex-col md:flex-row gap-1 md:gap-4 items-center justify-center">
                <TbCardsFilled className="text-5xl" />
                <h1 className="font-semibold text-3xl md:text-4xl">Rummy Scorer</h1>
            </div>
            <div>
                <RulesLink />
            </div>
        </div>
    );
};

export default HomeHeader;