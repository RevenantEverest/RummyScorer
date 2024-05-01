import type { ScoreHistory } from '@@types/gameState';

import ScoreHistoryHeaders from './ScoreHistoryHeaders';
import ScoreHistoryCard from './ScoreHistoryCard';

export interface ScoreHistoryListProps {
    scoreHistory: ScoreHistory[]
};

function ScoreHistoryList({ scoreHistory }: ScoreHistoryListProps) {

    const renderScoreHistory = () => {
        return scoreHistory.map((score, index) => {
            const key = `${score}-${index}`;
            const bgColor = index % 2 === 0 ? "bg-card" : "bg-card-light";
            return (
                <ScoreHistoryCard 
                    key={key} 
                    className={bgColor} 
                    score={score} 
                    index={index}
                />
            );
        });
    };

    return(
        <div>
            <h3 className="text-center font-bold text-lg mb-4">Score History</h3>
            <ScoreHistoryHeaders />
            {renderScoreHistory()}
        </div>
    );
};

export default ScoreHistoryList;