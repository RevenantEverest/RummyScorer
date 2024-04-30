import type { RootState } from '@@store/index';

import { Link, createFileRoute } from '@tanstack/react-router'
import { useSelector } from 'react-redux';
import { FaCaretLeft, FaPlus } from 'react-icons/fa6';

import { Layout, Card, Button } from '@@components/Common';
import EditPlayer from '@@components/Game/EditPlayer';


export const Route = createFileRoute('/game/players/$playerId')({
    component: Player
});

function Player() {

    const { playerId } = Route.useParams();
    const player = useSelector((state: RootState) => state.gameState.players[Number(playerId)]);

    const renderScoreHistory = () => {
        return player.scoreHistory.map((score, index) => {
            const key = `${score}-${index}`;
            const bgColor = index % 2 === 0 ? "bg-card" : "bg-card-light";
            const rowClass = "w-full";
            return (
                <Card className={bgColor} key={key}>
                    <div className="flex gap-6 items-center justify-center text-center">
                        <p className={`${rowClass} font-bold`}>{index + 1}</p>
                        <p className={rowClass}>{score.started}</p>
                        <FaPlus className={`${rowClass} font-bold text-accent`} />
                        <p className={rowClass}>{score.gained}</p>
                        <p className={`${rowClass} font-bold text-accent`}>{score.started + score.gained}</p>
                    </div>
                </Card>
            );
        });
    };

    return(
        <Layout main className="bg-gradient-to-br from-card to-secondary lg:px-96 !pt-4 justify-center pb-10 md:pb-0 gap-5">
            <Link to="/game" className="self-start">
                <Button color="accent">
                    <FaCaretLeft className="mr-2" />
                    <p className="font-semibold">Back to Game</p>
                </Button>
            </Link>
            <Card className="w-full">
                <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex gap-2 items-center justify-center">
                            <h1 className="text-4xl font-bold">{player.name}</h1>
                            <EditPlayer player={player} />
                        </div>
                        <h2 className="font-semibold text-accent text-3xl">{player.score}</h2>
                    </div>
                    <div className="w-full md:w-9/12">
                        <h3 className="text-center font-bold text-lg mb-4">Score History</h3>
                        <Card className="bg-card-light">
                            <div className="flex gap-6 items-center justify-center text-center">
                                <p className="w-full font-semibold text-xs md:text-sm">Round #</p>
                                <p className="w-full font-semibold text-xs md:text-sm">Started With</p>
                                <p className="w-full" />
                                <p className="w-full font-semibold text-xs md:text-sm">Gained</p>
                                <p className="w-full font-semibold text-xs md:text-sm">Final Score</p>
                            </div>
                        </Card>
                        {renderScoreHistory()}
                    </div>
                </div>
            </Card>
        </Layout>
    );
};