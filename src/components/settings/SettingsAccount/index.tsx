import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";
import { Form, Formik } from "formik";
import FormBuilder, { FormBuilderFormType } from "@/components/ui/FormBuilder";
import { Button } from "@fluentui/react-components";

interface SettingsAccountPropsType {
    className?: string;
}
const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    avatar: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    username: "",
    email: "",
    phone: "",
    bloodGroup: "",
    lastDonation: "",
    currentAddress: "",
    permanentAddress: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
}

const FORM: FormBuilderFormType = {
    sectionClassName: "w-full grid grid-cols-3 gap-x-5 gap-y-3",
    fieldClassName: "flex flex-col items-start justify-between gap-1 w-full",
    labelClassName: "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
    inputClassName: "w-full bg-[#F0F0F0] border-[1px] border-[#D9D9D9] rounded-[4px]",
    // inputClassName?: string,
    sections: [
        {
            className: "w-full grid grid-cols-3 gap-x-5 gap-y-3",
            fields: [
                {
                    label: "First name",
                    name: "firstName",
                    placeholder: "E.G. John",
                },
                {
                    label: "Middle name",
                    name: "middleName",
                    placeholder: "E.G. Smith",
                },
                {
                    label: "Last name",
                    name: "lastName",
                    placeholder: "E.G. Doe",
                },
            ],
        },
        {
            className: "w-full grid grid-cols-2 gap-x-5 gap-y-3",
            title: "Password",
            fields: [
                {
                    className: "flex flex-col items-start w-full justify-between gap-1 w-full col-span-2",
                    label: "Current password",
                    name: "currentPassword",
                    placeholder: "********",
                    type: "password",
                },
                {
                    label: "New password",
                    name: "newPassword",
                    placeholder: "********",
                    type: "password",
                },
                {
                    label: "Confirm new password",
                    name: "confirmNewPassword",
                    placeholder: "********",
                    type: "password",
                },
            ],
        },
    ],
}

const SettingsAccount: FC<SettingsAccountPropsType> = ({ className }: SettingsAccountPropsType) => {
    const onDiscardHandler = () => {
        alert("Discard");
    };

    const onSubmitHandler = () => {
        alert("Saved");
    };

    return (
        <SettingsTemplate className={className} title="Account" onDiscard={onDiscardHandler} onSubmit={onSubmitHandler}>
            <div>
                <Formik initialValues={{}} onSubmit={onSubmitHandler}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form>
                            {/* General Information */}
                            <div>
                                {/* Creates form fields based on a object */}
                                <FormBuilder form={FORM} onChange={handleChange} onBlur={handleBlur} touched={touched} values={values} errors={errors} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </SettingsTemplate>
    );
};

export default memo(SettingsAccount);
