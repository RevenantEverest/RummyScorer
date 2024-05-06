import type { Settings } from '@@types/gameState';

import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { gameStateActions } from '@@store/actions';

import { ToggleSwitch, ToastSuccess } from '@@components/Common';

export interface DirtyRummyToggleProps {
    settings: Settings
};

function DirtyRummyToggle({ settings }: DirtyRummyToggleProps) {

    const dispatch = useDispatch();

    const handleChange = (value: boolean) => {
        dispatch(gameStateActions.updateSettings({
            ...settings,
            dirtyRummy: value
        }));

        toast((t) => (
            <ToastSuccess toast={t} message={`Dirty Rummy Toggled ${value ? "On" : "Off"}`} />
        ));
    };

    return(
        <div className="flex items-center gap-2 bg-card-light p-3 rounded-lg">
            <p className="flex-1 text-start font-semibold">Toggle Dirty Rummy</p>
            <div>
                <ToggleSwitch value={settings.dirtyRummy} onChange={handleChange} />
            </div>
        </div>
    );
};

export default DirtyRummyToggle;