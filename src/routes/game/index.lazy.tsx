import type { RootState } from '@@store/index';

import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import { TbCardsFilled } from 'react-icons/tb';
import { FaCaretLeft } from 'react-icons/fa6';

import { Layout, Card, Tooltip, Button } from '@@components/Common';
import AddPlayer from '@@components/Game/AddPlayer';
import PlayerList from '@@components/Game/PlayerList';
import NextRound from '@@components/Game/NextRound';
import ResetGame from '@@components/Game/ResetGame';

export const Route = createLazyFileRoute('/game/')({
    component: Game
});

function Game() {

    const gameState = useSelector((state: RootState) => state.gameState);

    return(
        <Layout main className="bg-gradient-to-br from-card to-secondary lg:px-96 !pt-4 justify-center pb-10 md:pb-0">
            <div className="z-10 w-full">
                <Card className="bg-card-light">
                    <div className="flex flex-col gap-5 md:gap-10 items-center justify-center md:px-20 md:py-10">
                        <div className="flex gap-4 items-center">
                            <TbCardsFilled className="text-5xl" />
                            <h1 className="text-4xl uppercase font-bold">Round {gameState.round}</h1>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <Link to="/">
                                <Tooltip content="Go Home" placement="left">
                                    <Button color="accent" className="py-3 rounded-full shadow-xl">
                                        <FaCaretLeft className="text-lg absolute" />
                                    </Button>
                                </Tooltip>
                            </Link>
                            <AddPlayer playerCount={gameState.players.length} />
                            <ResetGame />
                            <NextRound players={gameState.players} />
                        </div>
                        <div className="w-full">
                            <PlayerList players={gameState.players} />
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};