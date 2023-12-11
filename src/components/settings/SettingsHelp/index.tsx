import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsHelpPropsType {
  className?: string;
}

const SettingsHelp: FC<SettingsHelpPropsType> = ({
  className,
}: SettingsHelpPropsType) => {
  const onDiscardHandler = () => {
    alert("Discard");
  };

  const onSubmitHandler = () => {
    alert("Saved");
  };

  return (
    <SettingsTemplate
      className={className}
      title="Help"
      onDiscard={onDiscardHandler}
      onSubmit={onSubmitHandler}
    >
      <div>
        <p>Coming soon!</p>
      </div>
    </SettingsTemplate>
  );
};

export default memo(SettingsHelp);
