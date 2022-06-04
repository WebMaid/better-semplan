import { UIFooterComponent } from "./component";

export interface IndexProps {}

export const UIFooter = (indexProps: IndexProps) => {
	return <UIFooterComponent {...indexProps} />;
};
