import { ReactNode } from "react";
import { UIAppShellComponent } from "./component";
import { UINavbarLinkType } from "./navbar/item/types";

export interface IndexProps {
	children: ReactNode;
	navbarItems: UINavbarLinkType[];
}

export const UIAppShell = (indexProps: IndexProps) => {
	return <UIAppShellComponent {...indexProps} />;
};
