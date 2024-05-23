import { TFormBuilderForm } from "@/components/ui/FormBuilder";
import { z, ZodSchema } from "zod";

export type TcreateInitialValue = (form: TFormBuilderForm) => {
  [key: string]: any;
};

/**
 * Creates the initial values for a Formik form based on the given form object.
 * @param form - The form object containing sections and fields.
 * @returns The initial values as an object.
 */
export const createInitialValue: TcreateInitialValue = (form) => {
  // Initialize an empty object to hold the initial values
  const initialValues: { [key: string]: any } = {};

  // Iterate over each section in the form
  form.sections.forEach((section) => {
    // Iterate over each field in the section
    section.fields.forEach((field) => {
      // Set the initial value for the field in the initialValues object
      initialValues[field.name] = field.value || "";
    });
  });

  // Return the initial values object
  return initialValues;
};

/**
 * Create a Zod validation schema for React Hook Form based on a TFormBuilderForm object.
 * @param form - The TFormBuilderForm object representing the form structure.
 * @returns The Zod validation schema.
 */
export const createValidationSchema = (formSchema: TFormBuilderForm) => {
  // Create an empty object to store the schema
  // const schema: { [key: string]: any } = {};

  // // Iterate over each section in the form
  // formSchema.sections.forEach((section) => {
  //   // Iterate over each field in the section
  //   section.fields.forEach((field) => {
  //     // Add the field name and validation rules to the schema object
  //     schema[field.name] = field.validation;
  //   });
  // });

  // Create and return the Yup validation schema
  // return z.object(schema);

  return z.object(
    formSchema.sections.reduce(
      (acc, section) => {
        section.fields.forEach((field) => {
          acc[field.name] = field.validation;
        });
        return acc;
      },
      {} as { [key: string]: ZodSchema },
    ),
  );
};
