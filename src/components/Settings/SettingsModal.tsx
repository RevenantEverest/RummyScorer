import type { RootState } from '@@store/index';

import { useSelector } from 'react-redux';

import { Modal } from '@@components/Common';
import ThemeChanger from '@@components/ThemeChanger/ThemeChanger';
import DirtyRummyToggle from './DirtyRummyToggle';
import ClearLocalStorage from './ClearLocalStorage';

export interface SettingsModalProps {
    visible: boolean,
    setVisible: (value: boolean) => void
};

function SettingsModal({ visible, setVisible }: SettingsModalProps) {

    const gameState = useSelector((state: RootState) => state.gameState);

    return(
        <Modal motionKey="next-round-modal" visible={visible} setVisible={setVisible}>
            <div className="flex justify-center">
                <div className="flex flex-col gap-10 w-full md:w-1/2 text-center">
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <div className="flex flex-col gap-5 justify-center">
                        <ThemeChanger />
                        <DirtyRummyToggle settings={gameState.settings} />
                        <ClearLocalStorage />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SettingsModal;