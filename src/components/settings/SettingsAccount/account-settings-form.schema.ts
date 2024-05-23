import { TFormBuilderForm } from "@/components/ui/FormBuilder";
import { z } from "zod";

export const formSchema: TFormBuilderForm = {
  sectionClassName: "w-full grid grid-cols-3 gap-x-5 gap-y-3",
  fieldClassName: "flex flex-col items-start justify-between gap-1 w-full",
  labelClassName:
    "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
  inputClassName:
    "w-full bg-[#F0F0F0] border-[1px] border-[#D9D9D9] rounded-[4px]",
  // inputClassName?: string,
  sections: [
    {
      fields: [
        {
          label: "First name",
          name: "firstName",
          placeholder: "E.G. John",
          validation: z.string(),
        },
        {
          label: "Last name",
          name: "lastName",
          placeholder: "E.G. Doe",
          validation: z.string(),
        },
      ],
    },
    {
      className: "w-full grid grid-cols-2 gap-x-5 gap-y-3",
      title: "Password",
      fields: [
        {
          className:
            "flex flex-col items-start w-full justify-between gap-1 w-full col-span-2",
          label: "Current password",
          name: "currentPassword",
          placeholder: "********",
          type: "password",
          validation: z.string(),
        },
        {
          label: "New password",
          name: "newPassword",
          placeholder: "********",
          type: "password",
          validation: z.string(),
        },
        {
          label: "Confirm new password",
          name: "confirmNewPassword",
          placeholder: "********",
          type: "password",
          validation: z.string(),
        },
      ],
    },
  ],
};
