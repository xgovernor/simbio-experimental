import { TFormBuilderForm } from "@/components/ui/FormBuilder";
import { z } from "zod";

export const formSchema: TFormBuilderForm = {
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
          validation: z.string().optional(),
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
          validation: z.string(),
        },
        {
          label: "Date of Birth",
          name: "dob",
          type: "date",
          placeholder: "E.G. 01-01-2020",
          validation: z.string(),
        },
        {
          label: "Gender",
          name: "gender",
          placeholder: "E.G. Male",
          type: "select",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "binary", label: "Binary" },
          ],
          validation: z
            .string()
            .nonempty("Required")
            .refine(
              (value) => ["male", "female", "binary"].includes(value),
              {
                message: "We only accept male, female and binary",
              },
            ),
        },
        {
          label: "Father Name",
          name: "fatherName",
          placeholder: "E.G. Smith",
          validation: z.string().optional(),
        },
        {
          label: "Mother Name",
          name: "motherName",
          placeholder: "E.G. Smith",
          validation: z.string().optional(),
        },
        {
          label: "Profession",
          name: "profession",
          placeholder: "E.G. Software Developer",
          validation: z.string().optional(),
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
          validation: z.string(),
        },
        {
          label: "City",
          name: "city",
          placeholder: "E.G. San Francisco",
          validation: z.string().optional(),
        },
        {
          label: "State",
          name: "state",
          placeholder: "E.G. CA",
          validation: z.string().optional(),
        },
        {
          label: "Zip Code",
          name: "zip",
          placeholder: "E.G. 12345",
          validation: z.string().optional(),
        },
        {
          label: "Country",
          name: "country",
          placeholder: "E.g. Bangladesh",
          value: "Bangladesh",
          validation: z.string().optional(),
        },
        {
          label: "Phone",
          name: "phone",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string().optional(),
        },
        {
          label: "Email",
          name: "email",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string().optional(),
        },
      ],
    },
    {
      title: "ID Info",
      fields: [
        {
          label: "Passport",
          name: "passport",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string(),
        },
        {
          label: "NID",
          name: "nid",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string(),
        },
        {
          label: "Driving License",
          name: "drivingLicense",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string(),
        },
        {
          label: "Birth Certificate",
          name: "birthCertificate",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string(),
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
          validation: z
            .string()
            .refine(
              (value) =>
                ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].includes(
                  value,
                ),
              {
                message:
                  "We only accept A +, A -, B +, B -, O +, O -, AB +, AB -",
              },
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
          validation: z.string().optional(),
        },
        {
          label: "Allergic to Any Medication",
          name: "allergicToAnyMedication",
          type: "textarea",
          placeholder: "E.G. None",
          validation: z.string().optional(),
        },
        {
          label: "Infectious Disease History",
          name: "infectiousDiseaseHistory",
          type: "textarea",
          placeholder: "E.G. None",
          validation: z.string().optional(),
        },
        {
          label: "Blood Disorder History",
          name: "bloodDisorderHistory",
          type: "textarea",
          placeholder: "E.G. None",
          validation: z.string().optional(),
        },
        {
          label: "Last Blood Donation Experience",
          name: "lastBloodDonationExperience",
          type: "textarea",
          placeholder: "E.G. None",
          validation: z.string().optional(),
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
          validation: z.string().optional(),
        },
      ],
    },
  ],
};
