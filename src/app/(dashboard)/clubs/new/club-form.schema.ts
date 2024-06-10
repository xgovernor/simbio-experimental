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
      title: "General information",
      fields: [
        {
          label: "Name",
          name: "title",
          required: true,
          placeholder: "e.g. Simbio Blood Society",
          validation: z.string().min(10, "Required").max(256, "Too long"),
        },
        {
          label: "Establishment date",
          name: "establishedAt",
          required: true,
          type: "date",
          validation: z.string().date(),
        },
        {
          label: "Founder",
          name: "founder",
          required: true,
          placeholder: "e.g. John Doe",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
      ],
    },
    {
      title: "Contact information",
      fields: [
        {
          label: "Address",
          name: "address",
          required: true,
          placeholder: "e.g. 123 Main Street",
          validation: z.string().min(4, "Required").max(256, "Too long"),
        },
        {
          label: "City/Village",
          name: "city",
          required: true,
          placeholder: "e.g. Sylhet",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "State/District",
          name: "state",
          required: true,
          placeholder: "e.g. Sylhet",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "Postal code/Zip",
          name: "zip",
          required: true,
          placeholder: "e.g. 3100",
          validation: z
            .string()
            .min(4, "Required")
            .max(20, "Too long")
            .optional(),
        },
        {
          label: "Country",
          name: "country",
          value: "Bangladesh",
          required: true,
          placeholder: "e.g. Bangladesh",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          required: true,
          placeholder: "e.g. (+880) 1456-789450",
          validation: z.string().min(4, "Required").max(14, "Too long"),
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "e.g. example@simbio.com",
          validation: z
            .string()
            .optional()
            .or(z.string().email("Invalid email")),
        },
        {
          label: "Fax",
          name: "fax",
          placeholder: "e.g. 123-456-7890",
          validation: z.string().optional(),
        },
        {
          label: "Website",
          name: "website",
          type: "url",
          placeholder: "e.g. https://example.com",
          validation: z.string().optional().or(z.string().url()),
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
          validation: z.string().optional().or(z.string().url()),
        },
        {
          label: "Facebook group",
          name: "fbGroup",
          type: "url",
          placeholder: "e.g. https://fb.com/groups/example",
          validation: z.string().optional().or(z.string().url()),
        },
        {
          label: "X.com",
          name: "x",
          type: "url",
          placeholder: "e.g. https://x.com/example",
          validation: z.string().optional().or(z.string().url()),
        },
        {
          label: "LinkedIn",
          name: "linkedin",
          type: "url",
          placeholder: "e.g. https://linkedin.com/example",
          validation: z.string().optional().or(z.string().url()),
        },
        {
          label: "Instagram",
          name: "instagram",
          type: "url",
          placeholder: "e.g. https://instagram.com/example",
          validation: z.string().optional().or(z.string().url()),
        },
        {
          label: "YouTube",
          name: "youtube",
          type: "url",
          placeholder: "e.g. https://youtube.com/example",
          validation: z.string().optional().or(z.string().url()),
        },
      ],
    },
    {
      title: "Extra Info",
      className: "w-full grid grid-cols-1 gap-x-[3.25rem] gap-y-3",
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
