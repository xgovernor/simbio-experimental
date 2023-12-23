import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";
import { Form, Formik } from "formik";
import FormBuilder, { TFormBuilderForm } from "@/components/ui/FormBuilder";
import * as yup from "yup";
import {
  createFormikInitialValue,
  createFormikYupSchema,
} from "@/utils/formBuilder.util";

interface TSettingsAccountProps {
  className?: string;
}
// const initialValues = {
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     gender: "",
//     dateOfBirth: "",
//     avatar: "",
//     address: "",
//     country: "",
//     state: "",
//     city: "",
//     zipCode: "",
//     username: "",
//     email: "",
//     phone: "",
//     bloodGroup: "",
//     lastDonation: "",
//     currentAddress: "",
//     permanentAddress: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
// }

const FORM: TFormBuilderForm = {
  sectionClassName: "w-full grid grid-cols-3 gap-x-5 gap-y-3",
  fieldClassName: "flex flex-col items-start justify-between gap-1 w-full",
  labelClassName:
    "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
  inputClassName:
    "w-full bg-[#F0F0F0] border-[1px] border-[#D9D9D9] rounded-[4px]",
  // inputClassName?: string,
  sections: [
    {
      fields: [
        {
          label: "First name",
          name: "firstName",
          placeholder: "E.G. John",
          validation: yup.string(),
        },
        {
          label: "Last name",
          name: "lastName",
          placeholder: "E.G. Doe",
          validation: yup.string(),
        },
      ],
    },
    {
      className: "w-full grid grid-cols-2 gap-x-5 gap-y-3",
      title: "Password",
      fields: [
        {
          className:
            "flex flex-col items-start w-full justify-between gap-1 w-full col-span-2",
          label: "Current password",
          name: "currentPassword",
          placeholder: "********",
          type: "password",
          validation: yup.string(),
        },
        {
          label: "New password",
          name: "newPassword",
          placeholder: "********",
          type: "password",
          validation: yup.string(),
        },
        {
          label: "Confirm new password",
          name: "confirmNewPassword",
          placeholder: "********",
          type: "password",
          validation: yup.string(),
        },
      ],
    },
  ],
};

const SettingsAccount: FC<TSettingsAccountProps> = ({
  className,
}: TSettingsAccountProps) => {
  const initialValues = createFormikInitialValue(FORM);
  const validationSchema = createFormikYupSchema(FORM);

  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Account"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <div>
        <Formik
          initialValues={initialValues}
          validate={validationSchema as any}
          onSubmit={onSubmitHandler}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {/* General Information */}
              <div>
                {/* Creates form fields based on a object */}
                <FormBuilder
                  form={FORM}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                  values={values}
                  errors={errors}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SettingsTemplate>
  );
};

export default memo(SettingsAccount);
