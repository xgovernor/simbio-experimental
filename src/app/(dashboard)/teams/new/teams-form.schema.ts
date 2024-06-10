import { TFormBuilderForm } from "@/components/ui/FormBuilder";
import { z } from "zod";

const TEAMS = [
  {
    label: "12/12/2024 - 11/11/2025",
    value: "12/12/2024-11/11/2025",
  },
  {
    label: "12/12/2023 - 11/11/2024",
    value: "12/12/2023-11/11/2024",
  },
];

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
      title: "Community",
      fields: [
        {
          label: "Team/Community",
          name: "team",
          placeholder: "Select team",
          type: "select",
          value: TEAMS[0].value,
          options: TEAMS,
          validation: z.string(),
          // .oneOf(
          //   ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
          //   "We only accept A+, A-, B+, B-, O+, O-, AB+, AB-",
          // ),
        },
      ],
    },
    {
      title: "Official Information",
      fields: [
        {
          label: "Member ID",
          name: "memberId",
          placeholder: "e.g. SMB003063",
          validation: z.string(),
        },
        {
          label: "Designation",
          name: "designation",
          placeholder: "e.g. Secretary",
          validation: z.string(),
        },
        {
          label: "Appointed At",
          name: "appointedAt",
          type: "date",
          placeholder: "e.g. 2021-01-01",
          validation: z.string(),
        },
        {
          label: "Resignation At",
          name: "resignationAt",
          type: "date",
          placeholder: "e.g. 2021-01-01",
          validation: z.string(),
        },
        {
          label: "Official Phone",
          name: "officialPhone",
          type: "tel",
          placeholder: "e.g. (+880) 1234-567891",
          validation: z.string(),
        },
        {
          label: "Official Email",
          name: "officialEmail",
          type: "email",
          placeholder: "e.g. hello@dot9.dev",
          validation: z.string(),
        },
      ],
    },
  ],
};
