import { Card } from '@@components/Common';

function ScoreHistoryHeaders() {

    const titles = [
        "Round #",
        "Started With",
        "",
        "Gained",
        "Final Score"
    ];

    const renderHeaders = () => {
        return titles.map((title, index) => (
            <p 
                key={`score-history-header-${title}-${index}`}
                className="w-full font-semibold text-xs md:text-sm"
            >
                {title}
            </p>
        ));
    };

    return(
        <Card className="bg-card-light">
            <div className="flex gap-6 items-center justify-center text-center">
                {renderHeaders()}
            </div>
        </Card>
    );
};

export default ScoreHistoryHeaders;