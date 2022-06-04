import { Dispatch, SetStateAction } from "react";
import { UIHeaderComponent } from "./component";

export interface IndexProps {
	navOpened: boolean;
	setNavOpened: Dispatch<SetStateAction<boolean>>;
}

export const UIHeader = (indexProps: IndexProps) => {
	return <UIHeaderComponent {...indexProps} />;
};
