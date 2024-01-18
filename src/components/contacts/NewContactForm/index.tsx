import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import FormBuilder, { TFormBuilderForm } from "@/components/ui/FormBuilder";
import {
  createFormikInitialValue,
  createFormikYupSchema,
} from "@/utils/formBuilder.util";

interface TNewContactFormProps {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}

interface INewContactForm {
  // Reference
  refId: string;

  // General
  fullName: string;
  profession: string;

  // Address
  address: string;
  city: string;
  district: string;
  zip: string;
  country: string;

  // Contact
  email: string;
  phone: string;
  fax: string;
  website: string;

  // Social Media
  fbPage: string;
  fbGroup: string;
  x: string;
  linkedin: string;
  instagram: string;
  youtube: string;

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
      title: "Reference",
      fields: [
        {
          label: "Reference ID",
          name: "refId",
          placeholder: "E.G. 123456",
          validation: Yup.string().required("Required"),
        },
      ],
    },
    {
      title: "General Info",
      fields: [
        {
          label: "Full Name",
          name: "fullName",
          placeholder: "E.G. Smith John",
          validation: Yup.string().required("Required"),
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
      title: "Contact information",
      fields: [
        {
          label: "Address",
          name: "address",
          placeholder: "e.g. 123 Main Street",
          validation: Yup.string().required("Required"),
        },
        {
          label: "City",
          name: "city",
          placeholder: "e.g. New York",
          validation: Yup.string().required("Required"),
        },
        {
          label: "District",
          name: "district",
          placeholder: "e.g. Manhattan",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Zip",
          name: "zip",
          placeholder: "e.g. 10001",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Country",
          name: "country",
          defaultValue: "Bangladesh",
          placeholder: "e.g. United States",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          placeholder: "e.g. 123-456-7890",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "e.g. example@simbio.com",
          validation: Yup.string()
            .required("Required")
            .email("Invalid email address"),
        },
        {
          label: "Fax",
          name: "fax",
          type: "tel",
          placeholder: "e.g. 123-456-7890",
          validation: Yup.string(),
        },
        {
          label: "Website",
          name: "website",
          type: "url",
          placeholder: "e.g. https://example.com",
          validation: Yup.string().url(),
        },
      ],
    },
    {
      title: "Social media",
      fields: [
        {
          label: "Facebook page",
          name: "fbPage",
          type: "url",
          placeholder: "e.g. https://fb.com/example",
          validation: Yup.string(),
        },
        {
          label: "Facebook group",
          name: "fbGroup",
          type: "url",
          placeholder: "e.g. https://fb.com/groups/example",
          validation: Yup.string(),
        },
        {
          label: "X.com",
          name: "x",
          type: "url",
          placeholder: "e.g. https://x.com/example",
          validation: Yup.string(),
        },
        {
          label: "LinkedIn",
          name: "linkedin",
          type: "url",
          placeholder: "e.g. https://linkedin.com/example",
          validation: Yup.string(),
        },
        {
          label: "Instagram",
          name: "instagram",
          type: "url",
          placeholder: "e.g. https://instagram.com/example",
          validation: Yup.string(),
        },
        {
          label: "YouTube",
          name: "youtube",
          type: "url",
          placeholder: "e.g. https://youtube.com/example",
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

const NewContactForm: React.FC<TNewContactFormProps> = ({
  className,
  children,
  ...rest
}: TNewContactFormProps) => {
  const classes = useStyles();
  const initialValues = createFormikInitialValue(FORM);
  const validationSchema = createFormikYupSchema(FORM);

  const onSubmitHandler = (
    values: INewContactForm,
    { setSubmitting }: FormikHelpers<INewContactForm>,
  ): void => {
    setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues as INewContactForm}
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

export default memo(NewContactForm);
