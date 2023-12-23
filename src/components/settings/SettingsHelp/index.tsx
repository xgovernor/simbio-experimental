import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface TSettingsHelpProps {
  className?: string;
}

const SettingsHelp: FC<TSettingsHelpProps> = ({
  className,
}: TSettingsHelpProps) => {
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
