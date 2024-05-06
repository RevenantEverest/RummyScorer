import type { RootState } from '@@store/index';

import { createLazyFileRoute } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

import { Layout, Card } from '@@components/Common';
import AddToHomeScreenButton from '@@components/AddToHomeScreenButton';
import HomeHeader from '../components/Home/HomeHeader';
import StartGameButtons from '../components/Home/StartGameButtons';

export const Route = createLazyFileRoute('/')({
    component: Index
});

function Index() {

    const gameState = useSelector((state: RootState) => state.gameState);    

    return(
        <Layout main className="lg:px-96 !pt-0 justify-center pb-10 md:pb-0">
            <div className="z-10 w-full md:w-8/12">
                <Card className="bg-card-light">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <HomeHeader />
                        <StartGameButtons players={gameState.players} />
                    </div>
                </Card>
                <div className="flex justify-center">
                    <AddToHomeScreenButton />
                </div>
            </div>
        </Layout>
    );
};