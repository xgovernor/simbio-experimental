import { Checkbox } from "@fluentui/react-components";
import { FC, memo, useState } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsAccessibilityPropsType {
  className?: string;
}

const SettingsAccessibility: FC<SettingsAccessibilityPropsType> = ({
  className,
}: SettingsAccessibilityPropsType) => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(true);

  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Accessibility"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <>
        <div className="flex flex-col">
          <p className="subtitle2 mb-1">
            Select which option you&apos;d like to use:
          </p>
          <Checkbox
            checked={option1}
            onChange={() => setOption1((checked) => !checked)}
            label={
              <>
                <h3 className="mb-1">Turn off keyboard shortcuts</h3>
                <p className="text-xs">
                  You can perform many common tasks using keyboard. You can
                  choose which of the shortcuts you&apos;d like to use, or turn
                  them off!
                </p>
              </>
            }
          />

          <Checkbox
            className="mt-1"
            checked={option2}
            onChange={() => setOption2((checked) => !checked)}
            label={
              <>
                <h4 className="mb-1">Adjust timing</h4>
                <p className="text-xs">
                  Show error notifications and action confirmations until you
                  dismiss them.
                </p>
              </>
            }
          />
        </div>
      </>
    </SettingsTemplate>
  );
};

export default memo(SettingsAccessibility);
