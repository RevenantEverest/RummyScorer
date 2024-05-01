import type { RootState } from '@@store/index';

import { Link, useNavigate, createLazyFileRoute } from '@tanstack/react-router';
import { TbCardsFilled } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

import { gameStateActions } from '@@store/actions';

import { Layout, Card, Button } from '@@components/Common';
import AddToHomeScreenButton from '@@components/AddToHomeScreenButton';

export const Route = createLazyFileRoute('/')({
    component: Index
});

function Index() {

    const gameState = useSelector((state: RootState) => state.gameState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startNewGame = () => {
        dispatch(gameStateActions.newGame());

        navigate({ to: "/game" });
    };

    return(
        <Layout main className="bg-gradient-to-br from-card to-secondary lg:px-96 !pt-0 justify-center pb-10 md:pb-0">
            <div className="z-10">
                <Card className="bg-card-light">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className="flex gap-4 items-center">
                            <TbCardsFilled className="text-5xl" />
                            <h1 className="font-semibold text-3xl md:text-4xl">Rummy Scorer</h1>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button className="w-full" onClick={startNewGame}>
                                <p className="font-semibold">Start New Game</p>
                            </Button>
                            {
                                gameState.players.length > 0 &&
                                <Link to="/game" className="w-full">
                                    <Button color="accent" className="w-full">
                                        <p className="font-semibold">Resume Game</p>
                                    </Button>
                                </Link>
                            }
                        </div>
                    </div>
                </Card>
                <div className="flex justify-center">
                    <AddToHomeScreenButton />
                </div>
            </div>
        </Layout>
    );
};