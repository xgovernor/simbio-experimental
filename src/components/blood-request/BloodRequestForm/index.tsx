import {
    Button,
    makeStyles,
    shorthands,
} from "@fluentui/react-components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { memo } from "react";
import FormBuilder, { FormBuilderFormType } from "@/components/ui/FormBuilder";

interface RequestFormPropsType {
    className?: string;
    children?: React.ReactNode;
    rest?: object;
}

interface RequestFormType {
    // Patient Info
    patientFirstName: string;
    patientLastName: string;
    patientDob: string;
    patientGender: "male" | "female" | "transgender";
    patientProfession: string;
    patientAddress: string;
    patientPhone: string;
    patientIdType: string;
    patientId: string;

    // Donation Info
    healthIssue: string;
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    quantity: number;
    donationType: string;
    donationDateTime: string;
    hospitalName: string;
    hospitalAddress: string;
    hospitalPhone: string;
    hospitalEmail: string;

    // Refferance & Contact
    refId: string;
    refPhone: string;

    // Extra Info
    note: string;
}

const useStyles = makeStyles({

    input_label: {
        width: "100%",
        maxWidth: "150px",
        minWidth: "125px",
        fontSize: "13px",
        lineHeight: "32px",
        fontWeight: "500",
    },
    input_filed_wrapper: {
        width: "100%",
    },
    input_field: {
        width: "100%",
    },
    input_message: {
        color: "red",
        fontSize: "12px",
        marginTop: "2px",
        marginBottom: "2px",
    },
    field_address: {
        width: "100%",

        "& input": {
            width: "calc(100%)",
        },
    },
    form_footer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        ...shorthands.gap("16px"),
    },

    w100: {
        width: "100%",
        maxWidth: "100%",
    },
    w50: {
        width: "calc(50% - 22px)",
        maxWidth: "calc(50% - 22px)",
    },
});

const FORM: FormBuilderFormType = {
    // id?: string,
    // className?: string,
    sectionClassName: "w-full grid grid-cols-2 gap-x-13 gap-y-3",
    fieldClassName: "flex flex-row items-start justify-between gap-4 w-full",
    labelClassName: "w-full max-w-[150px] min-w-[125px] text-[13px] leading-[32px] font-medium",
    inputClassName: "w-full",
    // inputClassName?: string,
    sections: [
        {
            id: "section1",
            title: "Refference Info",
            // onBlur: () => {},
            // onChange: () => { },
            fields: [
                {
                    label: "Refference ID",
                    name: "refId",
                    placeholder: "E.G. SMBL-1234",
                },
                {
                    label: "Member Phone",
                    name: "refPhone",
                    type: "tel",
                    placeholder: "E.G. +91 1234567890",
                },
            ],
        },
        {
            id: "section2",
            title: "Donation Info",
            fields: [
                {
                    label: "Health Issue",
                    name: "healthIssue",
                    placeholder: "E.G. Cancer",
                },
                {
                    label: "Blood Group",
                    name: "bloodGroup",
                    placeholder: "E.G. SMBL-1234",
                    type: "select",
                    options: [
                        {
                            label: "A+",
                            value: "A+"
                        },
                        {
                            label: "A-",
                            value: "A-"
                        },
                        {
                            label: "B+",
                            value: "B+"
                        },
                        {
                            label: "B-",
                            value: "B-"
                        },
                        {
                            label: "AB+",
                            value: "AB+"
                        },
                        {
                            label: "AB-",
                            value: "AB-"
                        },
                        {
                            label: "O+",
                            value: "O+"
                        },
                        {
                            label: "O-",
                            value: "O-"
                        },
                    ]
                },
                {
                    label: "Quantity",
                    name: "quantity",
                    type: "select",
                    options: [
                        {
                            label: "none",
                            value: "none"
                        },
                        {
                            label: "1 unit",
                            value: "1"
                        },
                        {
                            label: "2 unit",
                            value: "2"
                        },
                        {
                            label: "3 unit",
                            value: "3"
                        },
                        {
                            label: "4 unit",
                            value: "4"
                        },
                        {
                            label: "5 unit",
                            value: "5"
                        },
                    ]
                },
                {
                    label: "Donation Type",
                    name: "donationType",
                    type: "select",
                    options: [
                        {
                            label: "Whole blood",
                            value: "blood"
                        },
                        {
                            label: "Plasma",
                            value: "plasma"
                        },
                        {
                            label: "platelet",
                            value: "platelet"
                        },
                        {
                            label: "Double red cell",
                            value: "double red cell"
                        }
                    ]
                },
                {
                    label: "Date & Time",
                    name: "donationDateTime",
                    type: "datetime-local",
                },
                {
                    label: "Hospital Name",
                    name: "hospitalName",
                    placeholder: "E.G. Square Medical Lab",
                },
                {
                    label: "Hospital Address",
                    name: "hospitalAddress",
                    placeholder: "E.G. 123 Main St, Anytown, USA 12345",
                },
                {
                    label: "Hospital Phone",
                    name: "hospitalPhone",
                    type: "tel",
                    placeholder: "E.G. (123) 456-7890",
                },
                {
                    label: "Hospital Email",
                    name: "hospitalEmail",
                    type: "email",
                    placeholder: "E.G. JbF7H@example.com",
                },
            ],
        },
        {
            id: "section3",
            title: "Patient Info",
            fields: [
                {
                    label: "First name",
                    name: "patientFirstName",
                    placeholder: "E.G. John"
                },
                {
                    label: "Last name",
                    name: "patientLastName",
                    placeholder: "E.G. Doe"
                },
                {
                    label: "Date of birth",
                    name: "patientDob",
                    type: "date",
                },
                {
                    label: "Gender",
                    name: "patientGender",
                    type: "select",
                    options: [
                        {
                            label: "Male",
                            value: "male"
                        },
                        {
                            label: "Female",
                            value: "female"
                        },
                        {
                            label: "Trans",
                            value: "transgender"
                        },
                    ]
                },
                {
                    label: "Profession",
                    name: "patientProfession",
                    placeholder: "E.G. Doctor",
                },
                {
                    label: "Address",
                    name: "patientAddress",
                    placeholder: "E.G. 123, Banani, Dhaka",
                },
                {
                    label: "Phone",
                    name: "patientPhone",
                    placeholder: "E.g: 01xxx-xxxxxx",
                    type: "tel",
                },
                {
                    label: "ID Type",
                    name: "patientIdType",
                    type: "select",
                    options: [
                        {
                            label: "none",
                            value: "none"
                        },
                        {
                            label: "Passport",
                            value: "passport"
                        },
                        {
                            label: "Voter ID",
                            value: "nid"
                        },
                        {
                            label: "Driving License",
                            value: "driving license"
                        },
                        {
                            label: "Birth Certificate",
                            value: "birth certificate"
                        },
                        {
                            label: "Ration Card",
                            value: "ration card"
                        },
                    ]
                },
                {
                    label: "ID",
                    name: "patientId",
                    placeholder: "",
                },
            ],
        },
    ],
    //     );
}

const RequestForm: React.FC<RequestFormPropsType> = ({ className, children, ...rest }: RequestFormPropsType) => {
    const classes = useStyles();
    const initialValues: RequestFormType = {
        // Patient Info
        patientFirstName: "",
        patientLastName: "",
        patientDob: "",
        patientGender: "male",
        patientProfession: "",
        patientAddress: "",
        patientPhone: "",
        patientIdType: "",
        patientId: "",

        // Donation Info
        healthIssue: "",
        bloodGroup: "A+",
        quantity: 0,
        donationType: "",
        donationDateTime: "",
        hospitalName: "",
        hospitalAddress: "",
        hospitalPhone: "",
        hospitalEmail: "",

        // Refferance & Contact
        refId: "",
        refPhone: "",

        // Extra Info
        note: "",
    };

    const validationScema = Yup.object().shape({
        // Patient Info
        patientFirstName: Yup.string().required("Required"),
        patientLastName: Yup.string(),
        patientDob: Yup.string().required("Required"),
        patientGender: Yup.string().required("Required").oneOf(["male", "female", "transgender"], "We only accept male, female and transgender"),
        patientProfession: Yup.string().required("Required"),
        patientAddress: Yup.string().required("Required"),
        patientPhone: Yup.string().required("Required"),
        patientIdType: Yup.string().required("Required").oneOf(["passport", "nid", "driving license", "birth certificate", "ration card"], "We only accept none, passport, nid, driving license, birth certificate and ration card"),
        patientId: Yup.string().required("Required"),

        // Donation Info
        healthIssue: Yup.string().required("Required"),
        bloodGroup: Yup.string().required("Required").oneOf(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], "We only accept A+, A-, B+, B-, O+, O-, AB+, AB-"),
        quantity: Yup.number().required("Required").min(1, "Must be greater than 0").max(5, "Must be less than 5"),
        donationType: Yup.string().required("Required").oneOf(["whole blood", "plasma", "platelet", "double red cell"], "We only accept whole blood, plasma platelet and double red cell"),
        donationDateTime: Yup.string().required("Required"),
        hospitalName: Yup.string().required("Required"),
        hospitalAddress: Yup.string().required("Required"),
        hospitalPhone: Yup.string().required("Required"),
        hospitalEmail: Yup.string().email().required("Required"),

        // Refferance & Contact
        refId: Yup.string().required("Required"),
        refPhone: Yup.string().required("Required"),

        // Extra Info
        note: Yup.string(),
    });

    const onSubmitHandler = (values: RequestFormType, { setSubmitting }: FormikHelpers<RequestFormType>): void => {
        setSubmitting(true);

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationScema} onSubmit={onSubmitHandler} {...rest}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form>
                    {/* General Information */}
                    <div>

                        {/* Creates form fields based on a object */}
                        <FormBuilder form={FORM} onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} />

                        {/* Submit Button */}
                        <div className={classes.form_footer}>
                            <Button
                                type="submit"
                                appearance="primary"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )
            }
        </Formik >
    );
};

export default memo(RequestForm);