import FormSection from "@/components/ui/form/FormSection";
import { Field, Input, Label, Select, Textarea } from "@fluentui/react-components";
import { memo } from "react";

type FormBuilderFieldSelectOptionType = {
    key?: string;
    label: string;
    value?: string;
}

type FormBuilderFieldType = {
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    label: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    validation: any;
    type?: "text" | "select" | "number" | "email" | "password" | "url" | "tel" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "textarea";
    options?: Array<FormBuilderFieldSelectOptionType>;
    autoComplete?: "on" | "off";
    required?: boolean;
}

type FormBuilderFormSectionType = {
    id?: string;
    title?: string;
    className?: string;
    fieldClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    autoComplete?: "on" | "off";
    required?: boolean;
    fields: Array<FormBuilderFieldType>;
}

export type FormBuilderFormType = {
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
    sections: Array<FormBuilderFormSectionType>;
}

export type FormBuilderPropsType = {
    form: FormBuilderFormType;
    onChange: any;
    onBlur: any;
    touched?: any;
    values: any;
    errors: any;
};

const FormBuilder: React.FC<FormBuilderPropsType> = ({ form, onChange, onBlur, values, errors, touched }: FormBuilderPropsType) => {
    console.log("Form Builder", touched)
    return (
        <>
            {form.sections.map((section: any, index: number) => (
                <FormSection title={section?.title} key={section?.id || index}>
                    <div className={section?.className || form.sectionClassName}>
                        {section?.fields?.map((field: any, index: number) => (
                            <div className={field?.className || section.fieldClassName || form.fieldClassName} key={field?.id || index}>

                                <Label className={field?.labelClassName || section.labelClassName || form.labelClassName} htmlFor={field?.name} required={field?.required || form.required}>
                                    {field?.label}
                                </Label>

                                <Field
                                    className={field.inputClassName || section.inputClassName || form.inputClassName}
                                    validationMessage={ touched[field.name] && errors[field.name] && errors[field.name]}
                                    required={field?.required || section?.required || form?.required || true}
                                >
                                    {/* Text Field */}
                                    {(!field.type || field?.type === "text" || field?.type === "number" || field?.type === "email" || field?.type === "password" || field?.type === "url" || field?.type === "tel" || field?.type === "search" || field?.type === "date" || field?.type === "time" || field?.type === "datetime-local" || field?.type === "month" || field?.type === "week") && (
                                        <Input
                                            name={field?.name}
                                            id={field?.name}
                                            type={field?.type || section.type || "text"}
                                            appearance="filled-lighter"
                                            placeholder={field?.placeholder}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={values[field?.name]}
                                            autoComplete={field?.autoComplete || section.autoComplete || form.autoComplete || "on"}
                                            required={field?.required || section?.required || form?.required || true}
                                        />
                                    )}

                                    {/* Select Field */}
                                    {(field?.type === "select") && (
                                        <Select
                                            name={field?.name}
                                            id={field?.name}
                                            appearance="filled-lighter"
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={values[field?.name]}
                                            autoComplete={field?.autoComplete || section.autoComplete || form.autoComplete || "on"}
                                            required={field?.required || section?.required || form?.required || true}
                                        >
                                            {field?.options?.map((option: any, index: number) => (
                                                <option value={option.value} key={index}>{option.label}</option>
                                            ))}
                                        </Select>
                                    )}

                                    {/* Textarea Field */}
                                    {(field?.type === "textarea") && (
                                        <Textarea
                                            name={field?.name}
                                            id={field?.name}
                                            appearance="filled-lighter"
                                            placeholder={field?.placeholder}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={values[field?.name]}
                                            autoComplete={field?.autoComplete || section.autoComplete || form.autoComplete || "on"}
                                            required={field?.required || section?.required || form?.required || true}
                                        />
                                    )}

                                </Field>

                            </div>
                        ))}
                    </div>
                </FormSection>
            ))}
        </>
    )
}

export default memo(FormBuilder);
