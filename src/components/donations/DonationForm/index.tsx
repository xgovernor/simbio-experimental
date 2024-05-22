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
  sectionClassName:
    "w-full grid max-md:grid-cols-1 grid-cols-2 gap-x-13 gap-y-3",
  fieldClassName:
    "flex max-md:flex-col max-md:gap-1 flex-row items-start justify-between gap-4 w-full",
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
      title: "Donor Info",
      fields: [
        {
          label: "Membership ID",
          name: "memberId",
          placeholder: "E.G. SMMS-1234",
          required: true,
          validation: Yup.string(),
        },
      ],
    },
    {
      title: "Donation Info",
      fields: [
        {
          label: "Health Issue",
          name: "healthIssue",
          placeholder: "E.G. Cancer",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Blood Group",
          name: "bloodGroup",
          placeholder: "E.G. SMBL-1234",
          defaultValue: "A+",
          type: "select",
          options: [
            {
              label: "A+",
              value: "A+",
            },
            {
              label: "A-",
              value: "A-",
            },
            {
              label: "B+",
              value: "B+",
            },
            {
              label: "B-",
              value: "B-",
            },
            {
              label: "AB+",
              value: "AB+",
            },
            {
              label: "AB-",
              value: "AB-",
            },
            {
              label: "O+",
              value: "O+",
            },
            {
              label: "O-",
              value: "O-",
            },
          ],
          validation: Yup.string()
            .required("Required")
            .oneOf(
              ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
              "We only accept A+, A-, B+, B-, O+, O-, AB+, AB-",
            ),
        },
        {
          label: "Donation Type",
          name: "donationType",
          type: "select",
          options: [
            {
              label: "Whole blood",
              value: "blood",
            },
            {
              label: "Plasma",
              value: "plasma",
            },
            {
              label: "platelet",
              value: "platelet",
            },
            {
              label: "Double red cell",
              value: "double red cell",
            },
          ],
          validation: Yup.string()
            .required("Required")
            .oneOf(
              ["whole blood", "plasma", "platelet", "double red cell"],
              "We only accept whole blood, plasma platelet and double red cell",
            ),
        },
        {
          label: "Date & Time",
          name: "donationDateTime",
          type: "datetime-local",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Hospital Name",
          name: "hospitalName",
          placeholder: "E.G. Square Medical Lab",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Hospital Address",
          name: "hospitalAddress",
          placeholder: "E.G. 123 Main St, Anytown, USA 12345",
          validation: Yup.string().required("Required"),
        },
      ],
    },
    {
      title: "Patient Info",
      fields: [
        {
          label: "First name",
          name: "patientFirstName",
          placeholder: "E.G. John",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Last name",
          name: "patientLastName",
          placeholder: "E.G. Doe",
          validation: Yup.string(),
        },
        {
          label: "Date of birth",
          name: "patientDob",
          type: "date",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Gender",
          name: "patientGender",
          type: "select",
          options: [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
            {
              label: "Trans",
              value: "transgender",
            },
          ],
          validation: Yup.string()
            .required("Required")
            .oneOf(
              ["male", "female", "transgender"],
              "We only accept male, female and transgender",
            ),
        },
        {
          label: "Profession",
          name: "patientProfession",
          placeholder: "E.G. Doctor",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Address",
          name: "patientAddress",
          placeholder: "E.G. 123, Banani, Dhaka",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Phone",
          name: "patientPhone",
          placeholder: "E.g: 01xxx-xxxxxx",
          type: "tel",
          validation: Yup.string().required("Required"),
        },
        {
          label: "ID Type",
          name: "patientIdType",
          type: "select",
          options: [
            {
              label: "none",
              value: "none",
            },
            {
              label: "Passport",
              value: "passport",
            },
            {
              label: "Voter ID",
              value: "nid",
            },
            {
              label: "Driving License",
              value: "driving license",
            },
            {
              label: "Birth Certificate",
              value: "birth certificate",
            },
            {
              label: "Ration Card",
              value: "ration card",
            },
          ],
          validation: Yup.string()
            .required("Required")
            .oneOf(
              [
                "passport",
                "nid",
                "driving license",
                "birth certificate",
                "ration card",
              ],
              "We only accept none, passport, nid, driving license, birth certificate and ration card",
            ),
        },
        {
          label: "ID",
          name: "patientId",
          placeholder: "",
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
