import { useState } from 'react';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { FaCaretLeft, FaBookOpen } from 'react-icons/fa6';

import { Layout, Button, Card, Markdown } from '@@components/Common';
import rummyRules from '../assets/markdown/rummyRules.md';
import variantRules from '../assets/markdown/variantRules.md';
import dirtyRummyRules from '../assets/markdown/dirtyRummyRules.md';

export type RuleSection = "Rummy" | "Variants" | "Dirty Rummy";

export const Route = createLazyFileRoute('/rules')({
    component: Rules
});

function Rules() {

    const availableSections: RuleSection[] = ["Rummy", "Variants", "Dirty Rummy"];
    const [section, setSection] = useState<RuleSection>("Rummy");

    const getSectionRules = () => {
        if(section === "Rummy") {
            return rummyRules;
        }

        if(section === "Variants") {
            return variantRules;
        }

        if(section === "Dirty Rummy") {
            return dirtyRummyRules;
        }
    };

    const renderSections = () => {
        return availableSections.map((title, index) => (
            <Button 
                key={`rule-section-${title}-${index}`} 
                className="w-26"
                color={section === title ? "gradient" : "primary"}
                onClick={() => setSection(title)}
            >
                <p className="font-semibold text-xs md:text-sm">{title}</p>
            </Button>
        ));
    };
    
    return(
        <Layout main className="lg:px-96 !pt-0 justify-center pb-10 md:pb-0">
            <div className="my-20">
                <Link to="/game" className="self-start">
                    <Button color="accent">
                        <FaCaretLeft className="mr-2" />
                        <p className="font-semibold">Back to Game</p>
                    </Button>
                </Link>
                <Card className="bg-card-light w-full">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className="flex gap-4 items-center">
                            <FaBookOpen className="text-4xl" />
                            <h1 className="font-semibold text-3xl md:text-4xl">Rule Book</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                            {renderSections()}
                        </div>
                    </div>
                    <div>
                        <Markdown content={getSectionRules()} />
                    </div>
                </Card>
            </div>
        </Layout>
    );
};