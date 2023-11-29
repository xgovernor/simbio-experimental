"use client";
import * as Yup from "yup";
import { Input, mergeClasses } from "@fluentui/react-components";
import { Search16Regular } from "@fluentui/react-icons";
import { Form, Formik, FormikHelpers } from "formik";
import { memo, useRef } from "react";

interface SearchFormPropsType {
    className?: string;
    children?: React.ReactNode;
    layout?: boolean;
}

interface SearchFormType {
    search: string;
}

const SearchForm: React.FC<SearchFormPropsType> = ({
    className,
    children,
    layout = true,
    ...rest
}: SearchFormPropsType) => {
    const searchBox = useRef<HTMLInputElement>(null);

    const expandOnFocus = () => {
        if (searchBox.current?.style) {
            searchBox.current.style.setProperty("min-width", "400px");
        }
    };

    const onBlurCaptureHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            if (searchBox.current?.style) {
                searchBox.current.style.setProperty("min-width", "300px");
            }
        }
    };

    const initialState: SearchFormType = {
        search: "",
    };

    const validationSchema = Yup.object().shape({
        seach: Yup.string().required(),
    });

    const onSubmitHandler = (values: SearchFormType, { setSubmitting }: FormikHelpers<SearchFormType>) => {
        setSubmitting(true);

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="flex w-full min-w-[300px] items-center justify-center" ref={searchBox}>
            <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form className={mergeClasses("w-full", className)} {...rest}>
                        <div className="">
                            <Input
                                className="w-full bg-[#143b52] rounded px-2"
                                aria-label="Search"
                                autoComplete="off"
                                id="search"
                                name="search"
                                type="search"
                                contentBefore={<Search16Regular className="me-1" />}
                                appearance="filled-lighter"
                                value={values.search}
                                onFocus={expandOnFocus}
                                placeholder="Search"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onBlurCapture={onBlurCaptureHandler}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default memo(SearchForm);