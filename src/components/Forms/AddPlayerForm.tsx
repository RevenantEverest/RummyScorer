import type { FormikHelpers } from 'formik';
import type { Player } from '@@types/gameState';

import { useFormik } from 'formik';
import { FaUser } from 'react-icons/fa6';

import { TextInput, Button } from '@@components/Common';

export type AddPlayerFormValues = Record<keyof  Pick<Player, "name">, string>;

export type AddPlayerFormHelpers = FormikHelpers<AddPlayerFormValues>;

export interface AddPlayerFormProps {
    onSubmit: (values: AddPlayerFormValues, helpers: AddPlayerFormHelpers) => void
};

function AddPlayerForm(props: AddPlayerFormProps) {

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
        errors
    } = useFormik({
        initialValues: {
            name: "",
        } satisfies AddPlayerFormValues,
        onSubmit: props.onSubmit
    });

    return(
        <div className="flex w-full">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="pb-6">
                    <h1 className="text-center font-bold text-3xl">Add Player</h1>
                </div>
                <div className="pb-8">
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        icon={FaUser}
                        placeholder="Player Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errorMessage={errors.name}
                        required={true}
                    />
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
                        <p className="font-semibold">Add</p>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddPlayerForm;