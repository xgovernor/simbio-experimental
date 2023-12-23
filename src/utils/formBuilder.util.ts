import { TFormBuilderForm } from "@/components/ui/FormBuilder";
import { object } from "yup";

export type TCreateFormikInitialValue = (form: TFormBuilderForm) => {
  [key: string]: any;
};

/**
 * Creates the initial values for a Formik form based on the given form object.
 * @param form - The form object containing sections and fields.
 * @returns The initial values as an object.
 */
export const createFormikInitialValue: TCreateFormikInitialValue = (form) => {
  // Initialize an empty object to hold the initial values
  const initialValues: { [key: string]: any } = {};

  // Iterate over each section in the form
  form.sections.forEach((section) => {
    // Iterate over each field in the section
    section.fields.forEach((field) => {
      // Set the initial value for the field in the initialValues object
      initialValues[field.name] = field.defaultValue || "";
    });
  });

  // Return the initial values object
  return initialValues;
};

export type TCreateFormikYupSchema = (form: TFormBuilderForm) => {
  [key: string]: any;
};

/**
 * Create a Yup validation schema for Formik based on a TFormBuilderForm object.
 * @param form - The TFormBuilderForm object representing the form structure.
 * @returns The Yup validation schema.
 */
export const createFormikYupSchema: TCreateFormikYupSchema = (
  form: TFormBuilderForm,
) => {
  // Create an empty object to store the schema
  const schema: { [key: string]: any } = {};

  // Iterate over each section in the form
  form.sections.forEach((section) => {
    // Iterate over each field in the section
    section.fields.forEach((field) => {
      // Add the field name and validation rules to the schema object
      schema[field.name] = field.validation;
    });
  });

  // Create and return the Yup validation schema
  return object().shape(schema);
};
