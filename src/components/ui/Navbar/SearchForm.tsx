"use client";
import * as Yup from "yup";
import { Input, mergeClasses } from "@fluentui/react-components";
import { Search16Regular } from "@fluentui/react-icons";
import { Form, Formik, FormikHelpers } from "formik";
import { memo, useRef } from "react";

interface ISearchFormProps {
  className?: string;
  children?: React.ReactNode;
  layout?: boolean;
}

interface ISearchForm {
  search: string;
}

const SearchForm: React.FC<ISearchFormProps> = ({
  className,
  children,
  layout = true,
  ...rest
}: ISearchFormProps) => {
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

  const initialState: ISearchForm = {
    search: "",
  };

  const validationSchema = Yup.object().shape({
    seach: Yup.string().required(),
  });

  const onSubmitHandler = (
    values: ISearchForm,
    { setSubmitting }: FormikHelpers<ISearchForm>,
  ) => {
    setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className="flex w-full min-w-[300px] items-center justify-center max-md:hidden"
      ref={searchBox}
    >
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
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
                className="w-full rounded bg-[#143b52] px-2"
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
