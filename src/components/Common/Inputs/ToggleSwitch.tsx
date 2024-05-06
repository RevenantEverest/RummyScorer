import { useState } from 'react';

export interface ToggleSwitchProps {
    className?: string,
    label?: string,
    value?: boolean,
    onChange: (value: boolean) => void
};

function ToggleSwitch({ className="", label, value, onChange }: ToggleSwitchProps) {

    const [toggle, setToggle] = useState(Boolean(value));

    const toggleClass = 'transform translate-x-8';

    const handleToggleChange = () => {
        onChange(!toggle);
        setToggle(!toggle);
    };

    return(
        <div className={`flex gap-1 ${className}`}>
            {
                label &&
                <span className="font-semibold">{label}</span>
            }
            <div
                className={`
                    md:w-14 md:h-7 w-12 h-6 flex items-center bg-muted rounded-full p-1 pl-0 cursor-pointer shadow-xl
                    ${toggle && "!bg-primary"}
                `}
                onClick={handleToggleChange}
            >
                <div
                    className={`
                        md:w-6 md:h-6 h-5 w-5 bg-slate-100 rounded-full shadow-md transform 
                        ${toggle && toggleClass}
                    `}
                />
            </div>
        </div>
    );
};

export default ToggleSwitch;