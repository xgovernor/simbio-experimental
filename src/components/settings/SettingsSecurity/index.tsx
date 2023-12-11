import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsSecurityPropsType {
  className?: string;
}

const SettingsSecurity: FC<SettingsSecurityPropsType> = ({
  className,
}: SettingsSecurityPropsType) => {
  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Security"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <>
        <div>
          <p>Coming soon</p>
        </div>
      </>
    </SettingsTemplate>
  );
};

export default memo(SettingsSecurity);
