import type { TooltipProps as FlowbiteTooltipProps } from 'flowbite-react';

import React from 'react';
import { Tooltip as FlowbiteTooltip } from 'flowbite-react';

export interface TooltipProps extends FlowbiteTooltipProps {

};

function Tooltip({ content, children, className="", ...rest }: React.PropsWithChildren<TooltipProps>) {

    return(
        <FlowbiteTooltip
            className={className + " bg-background text-text"}
            content={content}
            {...rest}
        >
            {children}
        </FlowbiteTooltip>
    );
};

export default Tooltip;