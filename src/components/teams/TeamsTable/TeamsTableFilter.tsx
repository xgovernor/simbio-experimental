import * as React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
    Input,
    ToolbarButton,
    Field,
    Select,
} from "@fluentui/react-components";
import { Filter16Regular, Dismiss24Regular } from "@fluentui/react-icons";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BloodType } from "@/types";

type TeamsTableFilterFormType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bloodGroup: BloodType | string;
    lastDonation: string | any;
    location: string;
    prefLocation: string;
};

const TeamsTableFilter = () => {
    const initialValues: TeamsTableFilterFormType = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bloodGroup: "",
        lastDonation: "",
        location: "",
        prefLocation: "",
    };

    const validationScema = Yup.object().shape({
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string(),
        phone: Yup.string(),
        bloodGroup: Yup.string(),
        lastDonation: Yup.string(),
        location: Yup.string(),
        prefLocation: Yup.string(),
    });

    const onSubmitHandler = (
        values: TeamsTableFilterFormType,
        { setSubmitting }: FormikHelpers<TeamsTableFilterFormType>,
    ): void => {
        setSubmitting(true);

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };

    return (
        <Dialog>
            <DialogTrigger disableButtonEnhancement>
                <ToolbarButton appearance="subtle" icon={<Filter16Regular />}>
                    Filter
                </ToolbarButton>
            </DialogTrigger>

            <DialogSurface aria-describedby={undefined}>
                <Formik initialValues={initialValues} validationSchema={validationScema} onSubmit={onSubmitHandler}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form>
                            <DialogBody>
                                <DialogTitle
                                    action={
                                        <DialogTrigger action="close">
                                            <Button appearance="subtle" icon={<Dismiss24Regular />} />
                                        </DialogTrigger>
                                    }
                                >
                                    Table filter
                                </DialogTitle>

                                <DialogContent className="">
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                        {/* Name */}
                                        <Field
                                            className=""
                                            label="First name"
                                        // validationState="success"
                                        // validationMessage="This is a success message."
                                        >
                                            <Input
                                                className="w-full"
                                                name="firstName"
                                                placeholder="E.G. John"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                                autoComplete="on"
                                            />
                                        </Field>

                                        {/* Name */}
                                        <Field
                                            className=""
                                            label="Last name"
                                        // validationState="success"
                                        // validationMessage="This is a success message."
                                        >
                                            <Input
                                                className="w-full"
                                                name="lastName"
                                                placeholder="E.G. Doe"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                                autoComplete="on"
                                            />
                                        </Field>

                                        {/* Phone Number */}
                                        <Field className="" label="Phone">
                                            <Input
                                                className="w-full"
                                                name="phone"
                                                placeholder="E.G. 0123456789"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                autoComplete="on"
                                            />
                                        </Field>

                                        {/* Email */}
                                        <Field className="" label="Email">
                                            <Input
                                                className="w-full"
                                                name="email"
                                                placeholder="E.G. example@mail.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                autoComplete="on"
                                            />
                                        </Field>

                                        {/* Blood Group */}
                                        <Field className="" label="Blood Group">
                                            <Select
                                                className="w-full"
                                                name="bloodGroup"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.bloodGroup}
                                                autoComplete="on"
                                            >
                                                <option>---</option>
                                                <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                            </Select>
                                        </Field>

                                        {/* Last Donation Date */}
                                        <Field className="" label="Last donation">
                                            <Input
                                                className="w-full"
                                                name="lastDonation"
                                                type="date"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastDonation}
                                                placeholder="Select a date..."
                                            // contentEditable
                                            />
                                        </Field>

                                        {/* Location */}
                                        <Field className="" label="Location">
                                            <Input
                                                className="w-full"
                                                name="location"
                                                placeholder="E.G. Uposhahar"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.location}
                                                autoComplete="on"
                                            />
                                        </Field>

                                        {/* Prefared Location */}
                                        <Field className="" label="Prefared location">
                                            <Input
                                                className="w-full"
                                                name="prefLocation"
                                                placeholder="E.G. Sylhet"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.prefLocation}
                                                autoComplete="on"
                                            />
                                        </Field>
                                    </div>
                                </DialogContent>

                                <DialogActions className="mt-3">
                                    <DialogTrigger disableButtonEnhancement>
                                        <Button appearance="secondary">Close</Button>
                                    </DialogTrigger>
                                    <Button type="submit" appearance="primary">
                                        Submit
                                    </Button>
                                </DialogActions>
                            </DialogBody>
                        </Form>
                    )}
                </Formik>
            </DialogSurface>
        </Dialog>
    );
};

export default React.memo(TeamsTableFilter);
