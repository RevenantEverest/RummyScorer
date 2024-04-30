import type { FormikHelpers } from 'formik';
import type { Player } from '@@types/gameState';

import { useFormik } from 'formik';

import { TextInput, Button } from '@@components/Common';
import validator from 'validator';

export type NextRoundFormValues = { [key: string]: string };

export type NextRoundFormHelpers = FormikHelpers<NextRoundFormValues>;

export interface NextRoundFormProps {
    players: Player[],
    onSubmit: (values: NextRoundFormValues, helpers: NextRoundFormHelpers) => void
};

function NextRoundForm(props: NextRoundFormProps) {

    const generateInitialValues = () => {

        const values: NextRoundFormValues = {};

        for(let i = 0; i < props.players.length; i++) {
            values[i] = "";
        };

        return values;
    };

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldError,
        isSubmitting,
        values,
        errors
    } = useFormik({
        initialValues: generateInitialValues(),
        onSubmit: (values: NextRoundFormValues, helpers: NextRoundFormHelpers) => {
            let hasErrors = false;

            const keys = Object.keys(values);

            for(let i = 0; i < keys.length; i++) {
                const currentKey = keys[i];

                if(!validator.isNumeric(values[currentKey])) {
                    setFieldError(currentKey, "Please provide a valid number");
                    hasErrors = true;
                }
            };

            if(hasErrors) {
                return helpers.setSubmitting(false);
            }

            return props.onSubmit(values, helpers);
        }
    });

    const renderFields = () => {
        return props.players.map((player, index) => (
            <div className="pb-6" key={`next-round-form-player-${index}`}>
                <div className="flex items-end pb-2">
                    <p className="font-bold text-lg text-accent mr-1 relative top-0.5">{player.name}</p>
                    <p className="font-semibold text-sm">Round Score</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{player.score}</p>
                    <p className="font-semibold">+</p>
                    <TextInput
                        id={player.id.toString()}
                        name={player.id.toString()}
                        type="text"
                        placeholder={"Score"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[player.id]}
                        errorMessage={errors[player.id]}
                        required={true}
                    />
                </div>
            </div>
        ));
    };

    return(
        <div className="flex w-full">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="pb-6">
                    <h1 className="text-center font-bold text-3xl">Next Round</h1>
                    <p className="text-muted text-center mt-2">Tally up all player points and input them to their respective fields.</p>
                </div>
                <div className="pb-6">
                    {renderFields()}
                </div>
                <div className="pb-4">
                    <Button
                        className="w-full"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                        loading={isSubmitting}
                        onClick={() => handleSubmit}
                    >
                        <p className="font-semibold">Complete Round</p>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default NextRoundForm;