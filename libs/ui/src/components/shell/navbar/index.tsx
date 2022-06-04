import { UINavbarComponent } from "./component";
import { UINavbarLinkType } from "./item/types";

export interface IndexProps {
	opened: boolean;
	items: UINavbarLinkType[];
}

export const UINavbar = (indexProps: IndexProps) => {
	return <UINavbarComponent {...indexProps} />;
};
