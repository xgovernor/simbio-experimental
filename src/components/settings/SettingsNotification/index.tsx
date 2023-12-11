import { Checkbox, Text } from "@fluentui/react-components";
import { FC, memo, useState } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsNotificationPropsType {
  className?: string;
}

const SettingsNotification: FC<SettingsNotificationPropsType> = ({
  className,
}: SettingsNotificationPropsType) => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(true);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Notification"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <>
        <div className="flex flex-col">
          <Text className="subtitle2 mb-2">In-app notification</Text>
          <Checkbox
            checked={option1}
            onChange={() => setOption1((checked) => !checked)}
            label="Notify me when new erquests arrives."
          />
          <Checkbox
            checked={option2}
            onChange={() => setOption2((checked) => !checked)}
            label="Notify me when new message arrives."
          />
          <Checkbox
            checked={option3}
            onChange={() => setOption3((checked) => !checked)}
            label="Notify me when new membership request arrives."
          />
          <Checkbox
            checked={option4}
            onChange={() => setOption4((checked) => !checked)}
            label="Send me weekly summary of my activities."
          />
          <Checkbox
            checked={option5}
            onChange={() => setOption5((checked) => !checked)}
            label="Send me desktop notifications."
          />
          <Checkbox
            checked={option6}
            onChange={() => setOption6((checked) => !checked)}
            label="Play sound for notifications."
          />
          <Checkbox
            checked={
              option1 && option2 && option3 && option4 && option5 && option6
                ? true
                : !(
                      option1 ||
                      option2 ||
                      option3 ||
                      option4 ||
                      option5 ||
                      option6
                    )
                  ? false
                  : "mixed"
            }
            onChange={(_ev, data) => {
              setOption1(!!data.checked);
              setOption2(!!data.checked);
              setOption3(!!data.checked);
              setOption4(!!data.checked);
              setOption5(!!data.checked);
              setOption6(!!data.checked);
            }}
            label="Select above all."
          />
        </div>
      </>
    </SettingsTemplate>
  );
};

export default memo(SettingsNotification);
