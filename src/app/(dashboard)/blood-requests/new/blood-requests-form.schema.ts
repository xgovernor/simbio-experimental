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
      title: "Referral Info",
      fields: [
        {
          label: "Referral's ID",
          name: "refId",
          placeholder: "E.G. SMBL-1234",
          validation: z.string(),
        },
        {
          label: "Referral's Phone",
          name: "refPhone",
          type: "tel",
          placeholder: "E.G. +91 (+880) 1234-567891",
          validation: z.string(),
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
          validation: z.string(),
        },
        {
          label: "Blood Group",
          name: "bloodGroup",
          placeholder: "E.G. SMBL-1234",
          value: "A+",
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
          validation: z.string(),
          // .oneOf(
          //   ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
          //   "We only accept A+, A-, B+, B-, O+, O-, AB+, AB-",
          // ),
        },
        {
          label: "Quantity",
          name: "quantity",
          value: "1",
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
          validation: z
            .number()

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
          validation: z.string(),
          // .oneOf(
          //   ["whole blood", "plasma", "platelet", "double red cell"],
          //   "We only accept whole blood, plasma platelet and double red cell",
          // ),
        },
        {
          label: "Date & Time",
          name: "donationDateTime",
          type: "datetime-local",
          validation: z.string(),
        },
        {
          label: "Hospital Name",
          name: "hospitalName",
          placeholder: "E.G. Square Medical Lab",
          validation: z.string(),
        },
        {
          label: "Hospital Address",
          name: "hospitalAddress",
          placeholder: "E.G. 123 Main St, Anytown, USA 12345",
          validation: z.string(),
        },
        {
          label: "Hospital Phone",
          name: "hospitalPhone",
          type: "tel",
          placeholder: "E.G. (123) 456-7890",
          validation: z.string(),
        },
        // {
        //   label: "Hospital Email",
        //   name: "hospitalEmail",
        //   type: "email",
        //   placeholder: "E.G. JbF7H@example.com",
        //   validation: z.string().email(),
        // },
      ],
    },
    {
      title: "Patient Info",
      fields: [
        {
          label: "Full name",
          name: "fullName",
          placeholder: "E.G. John",
          validation: z.string(),
        },
        {
          label: "Date of birth",
          name: "patientDob",
          type: "date",
          validation: z.string(),
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
              label: "Binary",
              value: "binary",
            },
          ],
          validation: z.string(),
          // .oneOf(
          //   ["male", "female", "binary"],
          //   "We only accept male, female and binary",
          // ),
        },
        {
          label: "Profession",
          name: "patientProfession",
          placeholder: "E.G. Doctor",
          validation: z.string(),
        },
        {
          label: "ID Type",
          name: "patientIdType",
          type: "select",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "Passport",
              value: "passport",
            },
            {
              label: "NID",
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
          ],
          validation: z.string(),
          // .oneOf(
          //   [
          //     "passport",
          //     "nid",
          //     "driving license",
          //     "birth certificate",
          //     "ration card",
          //   ],
          //   "We only accept none, passport, nid, driving license, birth certificate and ration card",
          // ),
        },
        {
          label: "ID",
          name: "patientId",
          placeholder: "",
          validation: z.string(),
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
          label: "City/Village",
          name: "city",
          placeholder: "E.G. Syleht",
          validation: z.string(),
        },
        {
          label: "State/District",
          name: "state",
          placeholder: "E.G. Sylhet",
          validation: z.string(),
        },
        {
          label: "Zip/Postal code",
          name: "zip",
          placeholder: "E.G. 12345",
          validation: z.string(),
        },
        {
          label: "Country",
          name: "country",
          placeholder: "E.G. Bangladesh",
          value: "Bangladesh",
          validation: z.string(),
        },
        {
          label: "Phone",
          name: "phone",
          placeholder: "E.G. (+880) 1234-567891",
          validation: z.string(),
        },
        {
          label: "Email",
          name: "email",
          placeholder: "E.G. example@mail.com",
          required: false,
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
          validation: z.string(),
        },
      ],
    },
  ],
  //     );
};
