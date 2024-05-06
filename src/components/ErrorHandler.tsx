import type { ErrorComponentProps } from '@tanstack/react-router';

import { Layout, Button } from '@@components/Common';
import { useNavigate } from '@tanstack/react-router';

function ErrorHandler({ error, reset }: ErrorComponentProps) {

    const navigate = useNavigate();

    const handleClick = () => {
        console.error("Unhandled Error", error);
        reset();

        navigate({ to: "/" });
    };

    return(
        <Layout 
            main 
            className="lg:px-96 !pt-0 justify-center pb-10 md:pb-0 gap-5"
        >
            <h1>Uh oh, something went wrong...</h1>
            <Button color="accent" onClick={handleClick}>
                <p className="font-semibold">Let's get you back to safety!</p>
            </Button>
        </Layout>
    );
};

export default ErrorHandler;