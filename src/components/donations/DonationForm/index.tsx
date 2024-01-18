import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import FormBuilder, { TFormBuilderForm } from "@/components/ui/FormBuilder";
import {
  createFormikInitialValue,
  createFormikYupSchema,
} from "@/utils/formBuilder.util";

interface TDonationFormProps {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}

interface TDonationForm {
  // Reference
  refId: string;

  // General
  firstName: string;
  lastName: string;
  dob: string;
  gender: "male" | "female" | "transgender";
  fatherName: string;
  motherName: string;
  profession: string;

  // Contact
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;

  // ID
  passport: string;
  nid: string;
  drivingLicense: string;
  birthCertificate: string;

  // Health
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  medicalCondition: string;
  // allergyToBloodDonationProcess: string;
  allergicToAnyMedication: string;
  infectiousDiseaseHistory: string;
  bloodDisorderHistory: string;
  lastBloodDonationExperience: string;

  // Extra Info
  note: string;
}

const useStyles = makeStyles({
  input_label: {
    width: "100%",
    maxWidth: "150px",
    minWidth: "125px",
    fontSize: "13px",
    lineHeight: "32px",
    fontWeight: "500",
  },
  input_filed_wrapper: {
    width: "100%",
  },
  input_field: {
    width: "100%",
  },
  input_message: {
    color: "red",
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "2px",
  },
  field_address: {
    width: "100%",

    "& input": {
      width: "calc(100%)",
    },
  },
  form_footer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    ...shorthands.gap("16px"),
  },

  w100: {
    width: "100%",
    maxWidth: "100%",
  },
  w50: {
    width: "calc(50% - 22px)",
    maxWidth: "calc(50% - 22px)",
  },
});

const FORM: TFormBuilderForm = {
  sectionClassName: "w-full grid max-md:grid-cols-1 grid-cols-2 gap-x-13 gap-y-3",
  fieldClassName: "flex max-md:flex-col max-md:gap-1 flex-row items-start justify-between gap-4 w-full",
  labelClassName:
    "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
  inputClassName: "w-full",
  sections: [
    {
      title: "Reference Info",
      fields: [
        {
          label: "Referral ID",
          name: "refId",
          placeholder: "E.G. SMBL-1234",
          required: false,
          validation: Yup.string(),
        },
      ],
    },
    {
      title: "General Info",
      fields: [
        {
          label: "First Name",
          name: "firstName",
          placeholder: "E.G. Smith",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Last Name",
          name: "lastName",
          placeholder: "E.G. Smith",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Date of Birth",
          name: "dob",
          type: "date",
          placeholder: "E.G. 01-01-2020",
          validation: Yup.date().required("Required"),
        },
        {
          label: "Gender",
          name: "gender",
          placeholder: "E.G. Male",
          type: "select",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "transgender", label: "Transgender" },
          ],
          validation: Yup.string()
            .required("Required")
            .oneOf(
              ["male", "female", "transgender"],
              "We only accept male, female and transgender",
            ),
        },
        {
          label: "Father Name",
          name: "fatherName",
          placeholder: "E.G. Smith",
          validation: Yup.string(),
        },
        {
          label: "Mother Name",
          name: "motherName",
          placeholder: "E.G. Smith",
          validation: Yup.string(),
        },
        {
          label: "Profession",
          name: "profession",
          placeholder: "E.G. Software Developer",
          validation: Yup.string().required("Required"),
        },
      ],
    },
    {
      title: "Contact Info",
      fields: [
        {
          label: "Address",
          name: "address",
          placeholder: "E.G. 123 Main St",
          validation: Yup.string().required("Required"),
        },
        {
          label: "City",
          name: "city",
          placeholder: "E.G. San Francisco",
          validation: Yup.string().required("Required"),
        },
        {
          label: "State",
          name: "state",
          placeholder: "E.G. CA",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Zip Code",
          name: "zip",
          placeholder: "E.G. 12345",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Country",
          name: "country",
          placeholder: "E.G. USA",
          defaultValue: "Bangladesh",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Phone",
          name: "phone",
          placeholder: "E.G. 1234567890",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Email",
          name: "email",
          placeholder: "E.G. 1234567890",
          validation: Yup.string().required("Required"),
        },
      ],
    },
    {
      title: "ID Info",
      fields: [
        {
          label: "Passport",
          name: "passport",
          placeholder: "E.G. 1234567890",
          validation: Yup.string(),
        },
        {
          label: "NID",
          name: "nid",
          placeholder: "E.G. 1234567890",
          validation: Yup.string(),
        },
        {
          label: "Driving License",
          name: "drivingLicense",
          placeholder: "E.G. 1234567890",
          validation: Yup.string(),
        },
        {
          label: "Birth Certificate",
          name: "birthCertificate",
          placeholder: "E.G. 1234567890",
          validation: Yup.string(),
        },
      ],
    },
    {
      title: "Health Info",
      className: "w-full grid grid-cols-1 gap-x-13 gap-y-3",
      labelClassName:
        "w-full max-w-[250px] min-w-[125px] text-[13px] leading-[32px] font-medium",
      fields: [
        {
          label: "Blood Group",
          name: "bloodGroup",
          placeholder: "E.G. A+",
          type: "select",
          validation: Yup.string()
            .required("Required")
            .oneOf(
              ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
              "We only accept A+, A-, B+, B-, O+, O-, AB+, AB-",
            ),
          options: [
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
          ],
        },
        {
          label: "Medical Condition",
          name: "medicalCondition",
          type: "textarea",
          placeholder: "E.G. Diabetes",
          validation: Yup.string(),
        },
        {
          label: "Allergic to Any Medication",
          name: "allergicToAnyMedication",
          type: "textarea",
          placeholder: "E.G. None",
          validation: Yup.string(),
        },
        {
          label: "Infectious Disease History",
          name: "infectiousDiseaseHistory",
          type: "textarea",
          placeholder: "E.G. None",
          validation: Yup.string(),
        },
        {
          label: "Blood Disorder History",
          name: "bloodDisorderHistory",
          type: "textarea",
          placeholder: "E.G. None",
          validation: Yup.string(),
        },
        {
          label: "Last Blood Donation Experience",
          name: "lastBloodDonationExperience",
          type: "textarea",
          placeholder: "E.G. None",
          validation: Yup.string(),
        },
      ],
    },
    {
      title: "Extra Info",
      className: "w-full grid grid-cols-1 gap-x-13 gap-y-3",
      labelClassName:
        "w-full max-w-[250px] min-w-[125px] text-[13px] leading-[32px] font-medium",
      fields: [
        {
          label: "Note",
          name: "note",
          type: "textarea",
          placeholder: "E.G. None",
          validation: Yup.string(),
        },
      ],
    },
  ],
};

const DonationForm: React.FC<TDonationFormProps> = ({
  className,
  children,
  ...rest
}: TDonationFormProps) => {
  const classes = useStyles();
  const initialValues = createFormikInitialValue(FORM);
  const validationSchema = createFormikYupSchema(FORM);

  const onSubmitHandler = (
    values: TDonationForm,
    { setSubmitting }: FormikHelpers<TDonationForm>,
  ): void => {
    setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues as TDonationForm}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
      {...rest}
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

            {/* Submit Button */}
            <div className={classes.form_footer}>
              <Button
                type="submit"
                appearance="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default memo(DonationForm);
