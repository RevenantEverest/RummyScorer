import { createLazyFileRoute } from '@tanstack/react-router';
import { Layout, Card, Button } from '@@components/Common';

import { TbCardsFilled } from 'react-icons/tb';

export const Route = createLazyFileRoute('/')({
    component: Index
});

function Index() {

    return(
        <Layout main className="bg-gradient-to-br from-background to-card lg:px-96 !pt-4 justify-center pb-10 md:pb-0">
            <div className="z-10">
                <Card className="flex flex-col gap-10 items-center justify-center bg-card-light">
                    <div className="flex gap-4 items-center">
                        <TbCardsFilled className="text-text text-5xl" />
                        <h1 className="text-text font-semibold text-4xl">Rummy Scorer</h1>
                    </div>
                    <div className="flex">
                        <Button className="w-full">
                            <p className="font-semibold">Start Game</p>
                        </Button>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};