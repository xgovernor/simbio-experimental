import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import FormBuilder, { TFormBuilderForm } from "@/components/ui/FormBuilder";
import {
  createFormikInitialValue,
  createFormikYupSchema,
} from "@/utils/formBuilder.util";

interface ITeamMemberFormProps {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}

interface TeamMemberFormType {
  memberId: string;
  designation: string;
  appointedAt: string;
  resignationAt: string;
  officialPhone: string;
  officialEmail: string;
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
      title: "Official Information",
      fields: [
        {
          label: "Member ID",
          name: "memberId",
          placeholder: "e.g. SMB003063",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Designation",
          name: "designation",
          placeholder: "e.g. Secretary",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Appointed At",
          name: "appointedAt",
          type: "date",
          placeholder: "e.g. 2021-01-01",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Resignation At",
          name: "resignationAt",
          type: "date",
          placeholder: "e.g. 2021-01-01",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Official Phone",
          name: "officialPhone",
          type: "tel",
          placeholder: "e.g. 1234567890",
          validation: Yup.string().required("Required"),
        },
        {
          label: "Official Email",
          name: "officialEmail",
          type: "email",
          placeholder: "e.g. hello@dot9.dev",
          validation: Yup.string().required("Required"),
        },
      ],
    },
  ],
};

const TeamMemberForm: React.FC<ITeamMemberFormProps> = ({
  className,
  children,
  ...rest
}: ITeamMemberFormProps) => {
  const classes = useStyles();
  const initialValues = createFormikInitialValue(FORM);
  const validationSchema = createFormikYupSchema(FORM);

  const onSubmitHandler = (
    values: TeamMemberFormType,
    { setSubmitting }: FormikHelpers<TeamMemberFormType>,
  ): void => {
    setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues as TeamMemberFormType}
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

export default memo(TeamMemberForm);
