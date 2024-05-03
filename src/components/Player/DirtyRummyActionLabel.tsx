export interface DirtyRummyActionLabelProps {
    title: string
};

function DirtyRummyActionLabel({ title }: DirtyRummyActionLabelProps) {

    return(
        <p className="font-semibold text-sm text-center">
            {title}
        </p>
    );
};

export default DirtyRummyActionLabel;