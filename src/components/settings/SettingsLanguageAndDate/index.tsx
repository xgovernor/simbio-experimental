import { Combobox, Field, Label, Option } from "@fluentui/react-components";
import { SparkleFilled } from "@fluentui/react-icons";
import { FC, memo } from "react";
import {
  TDateFormat,
  TLanguageItem,
  TTimeFormat,
  TTimeZoonItem,
} from "@/types";
import SettingsTemplate from "../SettingsTemplate";

interface TSettingsLanguageAndDateProps {
  className?: string;
  language: TLanguageItem[];
  timeZones: TTimeZoonItem[];
  timeFormats: TTimeFormat[];
  dateFormats: TDateFormat[];
}

const SettingsLanguageAndDate: FC<TSettingsLanguageAndDateProps> = ({
  className,
  language,
  timeZones,
  timeFormats,
  dateFormats,
}: TSettingsLanguageAndDateProps) => {
  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Language and time"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <>
        {/* Language Area */}
        <div className="mb-5">
          <Field
            label={<Label weight="semibold">Language</Label>}
            validationState="none"
            validationMessageIcon={<SparkleFilled />}
            validationMessage="This will be the language used for your interface all over the system."
          >
            <Combobox placeholder="Select a language">
              {language?.map((item, index) => (
                <Option key={index}>{item.label}</Option>
              ))}
            </Combobox>
          </Field>
        </div>

        {/* Date & Time */}
        <div className="mb-4">
          <div className="flex flex-col gap-3">
            <Field
              label={<Label weight="semibold">Date format</Label>}
              validationState="none"
              validationMessageIcon={<SparkleFilled />}
              validationMessage="for example, September 1, 2023 is displayed as follows"
            >
              <Combobox>
                {timeFormats?.map((item, index) => (
                  <Option key={index}>{item.label}</Option>
                ))}
              </Combobox>
            </Field>

            <Field
              label={<Label weight="semibold">Date format</Label>}
              validationState="none"
              validationMessageIcon={<SparkleFilled />}
            >
              <Combobox>
                <Option value="12:00 AM">12:00 AM</Option>
                <Option value="12:00 PM">12:00 PM</Option>
                <Option value="00:00">00:00</Option>
                <Option value="00:00:00">00:00:00</Option>
                <Option value="12:00">12:00</Option>
                <Option value="12:00:00">12:00:00</Option>
                <Option value="12:00:00 AM">12:00:00 AM</Option>
                <Option value="12:00:00 PM">12:00:00 PM</Option>
                <Option value="00:00:00 AM">00:00:00 AM</Option>
                <Option value="00:00:00 PM">00:00:00 PM</Option>
              </Combobox>
            </Field>

            <Field
              label={<Label weight="semibold">Time zone</Label>}
              validationState="none"
              validationMessageIcon={<SparkleFilled />}
            >
              <Combobox>
                {timeZones?.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Combobox>
            </Field>
          </div>
        </div>
      </>
    </SettingsTemplate>
  );
};

export default memo(SettingsLanguageAndDate);
