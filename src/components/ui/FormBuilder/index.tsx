"use client";
import FormSection from "@/components/ui/form/FormSection";
import { memo } from "react";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Textarea } from "../textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createInitialValue,
  createValidationSchema,
} from "@/components/ui/FormBuilder/formBuilder.util";
import { z } from "zod";
import { cn } from "@/lib/utils";

type TFormBuilderFieldSelectOption = {
  key?: string;
  label: string;
  value?: string;
};

type TFormBuilderField = {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  label: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  validation: any;
  type?:
    | "text"
    | "select"
    | "number"
    | "email"
    | "password"
    | "url"
    | "tel"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "textarea";
  options?: Array<TFormBuilderFieldSelectOption>;
  autoComplete?: "on" | "off";
  required?: boolean;
};

type TFormBuilderFormSection = {
  id?: string;
  title?: string;
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  autoComplete?: "on" | "off";
  required?: boolean;
  fields: Array<TFormBuilderField>;
};

export type TFormBuilderForm = {
  id?: string;
  className?: string;
  sectionClassName?: string;
  fieldClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  autoComplete?: "on" | "off";
  required?: boolean;
  title?: string;
  // onChange?: any;
  // onBlur?: any;
  // values?: any;
  // errors?: any;
  sections: Array<TFormBuilderFormSection>;
};

export type TFormBuilderProps = {
  formSchema: TFormBuilderForm;
  onSubmit: (data: any) => void;
};

const FormBuilder = ({ formSchema, onSubmit }: TFormBuilderProps) => {
  const defaultValues = createInitialValue(formSchema);
  const validationSchema = createValidationSchema(formSchema);
  type TFormData = z.infer<typeof validationSchema>;
  const form = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const submitHandler: SubmitHandler<TFormData> = (values) => {
    // onSubmit();
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {formSchema.sections.map((section: any, index: number) => (
          <FormSection title={section?.title} key={section?.id || index}>
            <div className={section?.className || formSchema.sectionClassName}>
              {section?.fields?.map((fField: any, index: number) => (
                <FormField
                  key={fField?.name || index}
                  control={form.control}
                  name={fField?.name}
                  render={({ field }) => (
                    <FormItem
                      className={
                        fField?.className ||
                        section.fieldClassName ||
                        formSchema.fieldClassName
                      }
                    >
                      <FormLabel
                        className={
                          fField?.labelClassName ||
                          section.labelClassName ||
                          formSchema.labelClassName
                        }
                      >
                        {fField?.label}
                      </FormLabel>

                      <div
                        className={cn(
                          fField?.inputClassName ||
                            section.inputClassName ||
                            formSchema.inputClassName,
                        )}
                      >
                        <FormControl>
                          <>
                            {/* Text Field */}
                            {(!fField.type ||
                              fField?.type === "text" ||
                              fField?.type === "number" ||
                              fField?.type === "email" ||
                              fField?.type === "password" ||
                              fField?.type === "url" ||
                              fField?.type === "tel" ||
                              fField?.type === "search" ||
                              fField?.type === "date" ||
                              fField?.type === "time" ||
                              fField?.type === "datetime-local" ||
                              fField?.type === "month" ||
                              fField?.type === "week") && (
                              <Input
                                className={cn(
                                  "bg-white shadow-none",
                                  fField?.inputClassName ||
                                    section.inputClassName ||
                                    formSchema.inputClassName,
                                )}
                                type={fField?.type || section.type || "text"}
                                placeholder={fField?.placeholder}
                                required={fField?.required}
                                autoComplete={
                                  fField?.auoComplete ||
                                  section?.auoComplete ||
                                  formSchema?.autoComplete ||
                                  "on"
                                }
                                {...field}
                              />
                            )}

                            {/* Select Field */}
                            {fField?.type === "select" && (
                              <Select
                                required={fField?.required}
                                {...field}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger
                                  className={cn(
                                    "bg-white shadow-none",
                                    fField?.inputClassName ||
                                      section.inputClassName ||
                                      formSchema.inputClassName,
                                  )}
                                >
                                  <SelectValue
                                    placeholder={fField?.placeholder}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {fField?.options?.map(
                                    (option: any, index: number) => (
                                      <SelectItem
                                        value={option.value}
                                        key={index}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ),
                                  )}
                                </SelectContent>
                              </Select>
                            )}

                            {/* Textarea Field */}
                            {fField?.type === "textarea" && (
                              <Textarea
                                className={cn(
                                  "bg-white shadow-none",
                                  fField?.inputClassName ||
                                    section.inputClassName ||
                                    formSchema.inputClassName,
                                )}
                                placeholder={fField?.placeholder}
                                required={fField?.required}
                                autoComplete={
                                  fField?.auoComplete ||
                                  section?.auoComplete ||
                                  formSchema?.autoComplete ||
                                  "on"
                                }
                                {...field}
                              />
                            )}
                          </>
                        </FormControl>

                        <FormDescription />
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </FormSection>
        ))}

        {/* Submit Button */}
        <div className="flex w-full flex-row items-center justify-end gap-4">
          <Button type="submit" variant="default">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default memo(FormBuilder);
