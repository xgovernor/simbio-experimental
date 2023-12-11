import {
  Toolbar,
  ToolbarButton,
  mergeClasses,
} from "@fluentui/react-components";
import { FC, memo } from "react";

interface SettingsTemplatePropsType {
  className?: string;
  children: React.ReactElement;
  title: string;
  onSubmit?: () => void;
  onDiscard?: () => void;
}

const SettingsTemplate: FC<SettingsTemplatePropsType> = ({
  className,
  children,
  title,
  onDiscard,
  onSubmit,
}: SettingsTemplatePropsType) => {
  return (
    <div className={mergeClasses(className, "fw-full flex flex-col")}>
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
        className="h-full px-5 pb-5 pt-4"
        style={{
          minHeight: "calc(400px - 124px)",
        }}
      >
        {children}
      </div>

      {/* Footer */}
      {(onSubmit || onDiscard) && (
        <Toolbar
          className="sticky bottom-0 left-0 right-0 flex justify-end gap-4 border-t py-4 pe-4 ps-5"
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
