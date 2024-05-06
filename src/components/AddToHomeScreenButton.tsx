import { useState } from 'react';
import { CustomView } from 'react-device-detect';

import { Button, Modal } from '@@components/Common';
import { useAddToHomeScreenPrompt } from '@@hooks';

function AddToHomeScreenButton() {

    const [visible, setVisible] = useState(false);
    const [prompt, promptToInstall] = useAddToHomeScreenPrompt();

    const checkBrowserAvailability = (): boolean => {
        if(prompt) {
            return true;
        }
        
        return false;
    };

    return(
        <CustomView condition={checkBrowserAvailability()}>
            <Button className="!bg-card-light mt-8" onClick={() => setVisible(true)}>
                <p className="font-semibold">Install App</p>
            </Button>
            <Modal motionKey="pwa-prompt-modal" visible={visible} setVisible={setVisible}>
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="lg:w-1/2 text-center">
                        <h1 className="font-bold text-2xl">
                            Would you like to add this app to your home screen?
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row items justify-center gap-5 md:w-8/12 lg:w-1/2">
                        <Button className="flex-1 py-1" onClick={() => promptToInstall()}>
                            <p className="font-semibold">Yes, add to home screen!</p>
                        </Button>
                        <Button className="flex-1" color="accent" onClick={() => setVisible(false)}>
                            <p className="font-semibold">Close</p>
                        </Button>
                    </div>
                </div>
            </Modal>
        </CustomView>
    );
};

export default AddToHomeScreenButton;