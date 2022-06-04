import { LanguageSelectionComponent } from "./component";

export interface IndexProps {}

export const LanguageSelection = (indexProps: IndexProps) => {
	return <LanguageSelectionComponent {...indexProps} />;
};
