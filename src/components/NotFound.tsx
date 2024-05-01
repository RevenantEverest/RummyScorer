import { Layout, Button } from '@@components/Common';
import { Link } from '@tanstack/react-router';

function NotFound() {

    return(
        <Layout 
            main 
            className={`
                bg-gradient-to-br from-card to-secondary 
                lg:px-96 
                !pt-0 
                justify-center 
                pb-10 
                md:pb-0
                gap-5
            `}
        >
            <h1>You're not suppose to be here...</h1>
            <Link to="/">
                <Button color="accent">
                    <p className="font-semibold">Let's get you back to safety!</p>
                </Button>
            </Link>
        </Layout>
    );
};

export default NotFound;