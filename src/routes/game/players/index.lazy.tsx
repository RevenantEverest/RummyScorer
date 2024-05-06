import { useEffect } from 'react';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';

import { Layout } from '@@components/Common';

export const Route = createLazyFileRoute('/game/players/')({
    component: Players
});

function Players() {

    const navigate = useNavigate();

    useEffect(() => {
        navigate({ to: "/game" });
    });

    return(
        <Layout main className="lg:px-96 !pt-4 justify-center pb-10 md:pb-0 gap-5" />
    );
};