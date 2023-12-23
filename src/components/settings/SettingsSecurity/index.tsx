import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface ISettingsSecurityProps {
  className?: string;
}

const SettingsSecurity: FC<ISettingsSecurityProps> = ({
  className,
}: ISettingsSecurityProps) => {
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
