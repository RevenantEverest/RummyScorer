import type { ScoreHistory } from '@@types/gameState';

import { FaPlus } from 'react-icons/fa6';
import { Card } from '@@components/Common';
import React from 'react';

export interface ScoreHistoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
    score: ScoreHistory,
    index: number
};

function ScoreHistoryCard({ className, score, index }: ScoreHistoryCardProps) {

    const rowClass = "w-full";

    return(
        <Card className={className}>
            <div className="flex gap-6 items-center justify-center text-center">
                <p className={`${rowClass} font-bold`}>{index + 1}</p>
                <p className={rowClass}>{score.started}</p>
                <FaPlus className={`${rowClass} font-bold text-accent`} />
                <p className={rowClass}>{score.gained}</p>
                <p className={`${rowClass} font-bold text-accent`}>{score.started + score.gained}</p>
            </div>
        </Card>
    );
};

export default ScoreHistoryCard;