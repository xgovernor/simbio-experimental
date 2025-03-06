import {
  Toolbar,
  ToolbarButton,
  mergeClasses,
} from "@fluentui/react-components";
import { FC, memo } from "react";

interface ISettingsTemplateProps {
  className?: string;
  children: React.ReactElement<any>;
  title: string;
  onSubmit?: () => void;
  onDiscard?: () => void;
}

const SettingsTemplate: FC<ISettingsTemplateProps> = ({
  className,
  children,
  title,
  onDiscard,
  onSubmit,
}: ISettingsTemplateProps) => {
  return (
    <div className={mergeClasses(className, "w-full h-full flex flex-col")}>
      {/* Header */}
      <Toolbar
        className="border-b px-5 py-4"
        style={{
          borderColor: "rgb(240 240 240)",
        }}
      >
        <h1 className="subtitle1">{title}</h1>
      </Toolbar>

      {/* Body */}
      <div
        className="h-full px-5 pt-4 pb-5"
        style={{
          minHeight: "calc(400px - 124px)",
        }}
      >
        {children}
      </div>

      {/* Footer */}
      {(onSubmit || onDiscard) && (
        <Toolbar
          className="sticky right-0 bottom-0 left-0 flex justify-end gap-4 border-t py-4 ps-5 pe-4"
          style={{
            borderColor: "rgb(240, 240, 240)",
          }}
        >
          {onDiscard && (
            <ToolbarButton appearance="subtle" onClick={onDiscard}>
              Discard
            </ToolbarButton>
          )}

          {onSubmit && (
            <ToolbarButton appearance="primary" onClick={onSubmit}>
              Save
            </ToolbarButton>
          )}
        </Toolbar>
      )}
    </div>
  );
};

export default memo(SettingsTemplate);
