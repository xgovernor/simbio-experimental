import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsAppearancePropsType {
    className?: string;
}

const SettingsAppearance: FC<SettingsAppearancePropsType> = ({ className }: SettingsAppearancePropsType) => {
    const onDiscardHandler = () => {
        alert("Discard");
    };

    const onSubmitHandler = () => {
        alert("Saved");
    };

    return (
        <SettingsTemplate
            className={className}
            title="Appearance"
            onDiscard={onDiscardHandler}
            onSubmit={onSubmitHandler}
        >
            <div>
                <p>Coming soon!</p>
            </div>
        </SettingsTemplate>
    );
};

export default memo(SettingsAppearance);
