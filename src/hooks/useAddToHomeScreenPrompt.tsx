/*
    https://gist.github.com/rikukissa/cb291a4a82caa670d2e0547c520eae53
*/

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[],
    readonly userChoice: Promise<{
        outcome: "accepted" | 'dismissed',
        platform: string
    }>,
    prompt(): Promise<void>;
};

function useAddToHomeScreenPrompt(): [BeforeInstallPromptEvent | null, () => void] {
    const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    const promptToInstall = () => {
        if(prompt) {
            return prompt.prompt();
        }

        return Promise.reject(
            new Error("Tried installing before browser sent \"beforeinstallprompt\" event")
        )
    };

    useEffect(() => {
        const ready = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", ready as EventListenerOrEventListenerObject);

        return () => {
            window.removeEventListener("beforeinstallprompt", ready as EventListenerOrEventListenerObject);
        };
    }, []);

    return [prompt, promptToInstall];
};

export default useAddToHomeScreenPrompt;