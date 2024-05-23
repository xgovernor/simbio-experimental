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
          validation: z.string(),
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
      ],
    },
    {
      title: "Patient Info",
      fields: [
        {
          label: "First name",
          name: "patientFirstName",
          placeholder: "E.G. John",
          validation: z.string(),
        },
        {
          label: "Last name",
          name: "patientLastName",
          placeholder: "E.G. Doe",
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
              label: "Trans",
              value: "transgender",
            },
          ],
          validation: z.string(),
          // .oneOf(
          //   ["male", "female", "transgender"],
          //   "We only accept male, female and transgender",
          // ),
        },
        {
          label: "Profession",
          name: "patientProfession",
          placeholder: "E.G. Doctor",
          validation: z.string(),
        },
        {
          label: "Address",
          name: "patientAddress",
          placeholder: "E.G. 123, Banani, Dhaka",
          validation: z.string(),
        },
        {
          label: "Phone",
          name: "patientPhone",
          placeholder: "E.g: 01xxx-xxxxxx",
          type: "tel",
          validation: z.string(),
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
};
