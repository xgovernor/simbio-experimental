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
      title: "General Info",
      fields: [
        {
          label: "Full Name",
          name: "fullName",
          placeholder: "E.G. Smith John",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "Profession",
          name: "profession",
          placeholder: "E.G. Software Developer",
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
          placeholder: "e.g. 123 Main Street",
          validation: z.string().optional(),
        },
        {
          label: "City/Village",
          name: "city",
          placeholder: "e.g. Sylhet",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "State/District",
          name: "state",
          placeholder: "e.g. Sylhet",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "Zip/Postal code",
          name: "zip",
          placeholder: "e.g. 3100",
          validation: z.string().min(4, "Required").max(20, "Too long").optional(),
        },
        {
          label: "Country",
          name: "country",
          value: "Bangladesh",
          placeholder: "e.g. Bangladesh",
          validation: z.string().min(4, "Required").max(50, "Too long"),
        },
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          placeholder: "e.g. (+880) 1456-789450",
          validation: z.string().min(4, "Required").max(14, "Too long"),
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "e.g. example@simbio.com",
          validation: z.string().optional().or(z.string().email()),
        },
        {
          label: "Fax",
          name: "fax",
          type: "tel",
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
      className: "w-full grid grid-cols-1 gap-x-13 gap-y-3",
      labelClassName:
        "w-full max-w-[250px] min-w-[125px] text-[13px] leading-[32px] font-medium",
      fields: [
        {
          label: "Note",
          name: "note",
          type: "textarea",
          placeholder: "E.G. None",
          required: false,
          validation: z.string().optional(),
        },
      ],
    },
  ],
};
