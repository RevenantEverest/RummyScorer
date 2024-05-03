import type { RootState } from '@@store/index';

import { Link, createFileRoute } from '@tanstack/react-router'
import { useSelector } from 'react-redux';
import { FaCaretLeft } from 'react-icons/fa6';

import { Layout, Card, Button } from '@@components/Common';
import EditPlayer from '@@components/Player/EditPlayer';
import ScoreHistoryList from '@@components/Player/ScoreHistoryList';
import RemovePlayer from '@@components/Player/RemovePlayer';
import DirtyRummyActionsList from '@@components/Player/DirtyRummyActionsList';

export const Route = createFileRoute('/game/players/$playerId')({
    component: SinglePlayer
});

function SinglePlayer() {

    const { playerId } = Route.useParams();
    const player = useSelector((state: RootState) => state.gameState.players[Number(playerId)]);
    const gameState = useSelector((state: RootState) =>  state.gameState);

    const renderPlayer = () => (            
        <Card className="w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-2 items-center justify-center">
                        <h1 className="text-4xl font-bold">{player.name}</h1>
                    </div>
                    <h2 className="font-semibold text-accent text-3xl">{player.score}</h2>
                    {
                        gameState.settings.dirtyRummy && 
                        <div className="mt-4 mb-2">
                            <DirtyRummyActionsList editable player={player} />
                        </div>
                    }
                    <div className="flex gap-2 mt-5">
                        <EditPlayer player={player} />
                        <RemovePlayer player={player} />
                    </div>
                </div>
                <div className="w-full md:w-9/12">
                    <ScoreHistoryList scoreHistory={player.scoreHistory} />
                </div>
            </div>
        </Card>
    );

    const renderNoPlayer = () => (
        <Card className="w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-full">
                <h1 className="font-semibold">Player Doesn't Exist</h1>
            </div>
        </Card>
    );

    return(
        <Layout main className="bg-gradient-to-br from-card to-secondary lg:px-96 !pt-4 justify-center pb-10 md:pb-0 gap-5">
            <Link to="/game" className="self-start">
                <Button color="accent">
                    <FaCaretLeft className="mr-2" />
                    <p className="font-semibold">Back to Game</p>
                </Button>
            </Link>
            {
                player ? 
                renderPlayer() : 
                renderNoPlayer()
            }
        </Layout>
    );
};