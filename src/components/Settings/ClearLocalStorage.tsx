import React, { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { FaCheckSquare } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

import { Button, Modal, ToastSuccess, ToastError } from '@@components/Common';

function ClearLocalStorage() {

    const [visible, setVisible] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!success) {
            return;
        }

        let _timeout: NodeJS.Timeout | null = null;

        _timeout = setTimeout(() => {
            setSuccess(false);
        }, 3000);

        return () => {
            if(_timeout) {
                clearTimeout(_timeout);
            }
        };
    }, [success]);

    const handleClearCache = () => {
        try {
            window.localStorage.clear();

            toast((t) => (
                <ToastSuccess toast={t} message="Cache Cleared Successfully!" />
            ));

            setVisible(false);
            navigate({ to: "/" }); // Try to navigate before setting success to tue
            setSuccess(true);
        }
        catch(e) {
            console.error("Clear Local Storage", e);

            toast((t) => (
                <ToastError toast={t} message="Unable to clear cache" />
            ));
        }
    };

    return(
        <React.Fragment>
            <div className="flex flex-col gap-2.5">
                <p className="text-muted text-start text-sm md:text-md">If you're experiencing issues, try clearing the cache.</p>
                <div className="flex items-center gap-4">
                    <Button className="w-6/12 md:w-4/12" onClick={() => setVisible(true)}>
                        <p className="font-semibold">Clear Cache</p>
                    </Button>
                    {success && <FaCheckSquare className="text-lime-500" />}
                </div>
            </div>
            <Modal 
                motionKey="settings-clear-cache-modal" 
                className="bg-card-light"
                visible={visible} 
                setVisible={setVisible}
            >
                <div className="flex justify-center">
                    <div className="flex flex-col gap-8 w-full md:w-1/2">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-2xl text-center">
                                Are you sure you want to clear cache?
                            </h1>
                            <p className="text-muted text-center">This will end any running games and return you to the home screen</p>
                        </div>
                        <div className="flex gap-4">
                            <Button className="flex-1" onClick={handleClearCache}>
                                <p className="font-semibold">Yes, clear cache</p>
                            </Button>
                            <Button className="flex-1" color="accent" onClick={() => setVisible(false)}>
                                <p className="font-semibold">Close</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default ClearLocalStorage;