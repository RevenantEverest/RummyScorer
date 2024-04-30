import type { FormikHelpers } from 'formik';
import type { Player } from '@@types/gameState';

import { useFormik } from 'formik';
import { FaUser } from 'react-icons/fa6';

import { TextInput, Button } from '@@components/Common';

export type EditPlayerFormValues = Record<keyof  Pick<Player, "name">, string>;

export type EditPlayerFormHelpers = FormikHelpers<EditPlayerFormValues>;

export interface EditPlayerFormProps {
    player: Player,
    onSubmit: (values: EditPlayerFormValues, helpers: EditPlayerFormHelpers) => void
};

function EditPlayerForm(props: EditPlayerFormProps) {

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
        } satisfies EditPlayerFormValues,
        onSubmit: props.onSubmit
    });

    return(
        <div className="flex w-full">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="pb-6">
                    <h1 className="text-center font-bold text-3xl">Edit Player</h1>
                </div>
                <div className="pb-8">
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        icon={FaUser}
                        placeholder={props.player.name}
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
                        <p className="font-semibold">Update</p>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditPlayerForm;