import { Button } from "@fluentui/react-components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import FormBuilder, { TFormBuilderForm } from "@/components/ui/FormBuilder";
import {
  createFormikInitialValue,
  createFormikYupSchema,
} from "@/utils/formBuilder.util";

interface RequestFormPropsType {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}

interface TRequestForm {
  // Patient Info
  patientFirstName: string;
  patientLastName: string;
  patientDob: string;
  patientGender: "male" | "female" | "transgender";
  patientProfession: string;
  patientAddress: string;
  patientPhone: string;
  patientIdType: string;
  patientId: string;

  // Donation Info
  healthIssue: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  quantity: number;
  donationType: string;
  donationDateTime: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalPhone: string;
  hospitalEmail: string;

  // Reference & Contact
  refId: string;
  refPhone: string;

  // Extra Info
  note: string;
}

const FORM: TFormBuilderForm = {
  sectionClassName: "w-full grid grid-cols-2 gap-x-[3.25rem] gap-y-3",
  fieldClassName: "flex flex-row items-start justify-between gap-4 w-full",
  labelClassName:
    "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
  inputClassName: "w-full",
  sections: [
    {
      title: "Referral Info",
      fields: [
        {
          label: "Referral's ID",
          name: "refId",
          placeholder: "E.G. SMBL-1234",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Member Phone",
          name: "refPhone",
          type: "tel",
          placeholder: "E.G. +91 1234567890",
          validation: Yup.string().required("Required"),
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
          label: "Quantity",
          name: "quantity",
          defaultValue: "1",
          type: "select",
          options: [
            {
              label: "none",
              value: "none",
            },
            {
              label: "1 unit",
              value: "1",
            },
            {
              label: "2 unit",
              value: "2",
            },
            {
              label: "3 unit",
              value: "3",
            },
            {
              label: "4 unit",
              value: "4",
            },
            {
              label: "5 unit",
              value: "5",
            },
          ],
          validation: Yup.number()
            .required("Required")
            .min(1, "Must be greater than 0")
            .max(5, "Must be less than 5"),
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
        {
          label: "Hospital Phone",
          name: "hospitalPhone",
          type: "tel",
          placeholder: "E.G. (123) 456-7890",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Hospital Email",
          name: "hospitalEmail",
          type: "email",
          placeholder: "E.G. JbF7H@example.com",
          validation: Yup.string().email().required("Required"),
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
  ],
  //     );
};

const RequestForm: React.FC<RequestFormPropsType> = ({
  className,
  children,
  ...rest
}: RequestFormPropsType) => {
  const initialValues = createFormikInitialValue(FORM);
  const validationSchema = createFormikYupSchema(FORM);

  const onSubmitHandler = (
    values: TRequestForm,
    { setSubmitting }: FormikHelpers<TRequestForm>,
  ): void => {
    setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues as TRequestForm}
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
              values={values}
              touched={touched}
              errors={errors}
            />

            {/* Submit Button */}
            <div className="flex w-full flex-row items-center justify-end gap-4">
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

export default memo(RequestForm);
