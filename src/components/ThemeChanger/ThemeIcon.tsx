import type { Theme } from '@@types/theme';

import { Tooltip } from 'flowbite-react';
import React from 'react';

export interface ThemeIconProps extends React.HTMLProps<HTMLDivElement> {
    theme: Theme,
    currentTheme: Theme
};

function ThemeIcon({ theme, currentTheme, onClick }: ThemeIconProps) {

    const isCurrentTheme = theme.name === currentTheme.name;

    const generateDisplayName = (): string => {
        const words = theme.name.split(" ");

        for(let i = 0; i < words.length; i++) {
            const current = words[i];
            words[i] = current.charAt(0).toUpperCase() + current.substring(1);
        };

        return words.join(" ");
    };

    return(
        <div onClick={onClick} className={`rounded-full ${isCurrentTheme ? "border-2 border-secondary" : "border-2 border-gray-600"}`}>
            <Tooltip content={generateDisplayName()}>
                <div 
                    className="h-6 w-6 rounded-full" 
                    style={{ 
                        background: theme.colors.background 
                    }}
                />
            </Tooltip>
        </div>
    );
};

export default ThemeIcon;