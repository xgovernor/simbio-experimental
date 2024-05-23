"use client"
import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";
import FormBuilder from "@/components/ui/FormBuilder";
import { formSchema } from "./account-settings-form.schema";

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

const SettingsAccount: FC<TSettingsAccountProps> = ({
  className,
}: TSettingsAccountProps) => {

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

                {/* Creates form fields based on a object */}
                {/* <FormBuilder
                  form={FORM}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                  values={values}
                  errors={errors}
                /> */}
                <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />
      </div>
    </SettingsTemplate>
  );
};

export default memo(SettingsAccount);
