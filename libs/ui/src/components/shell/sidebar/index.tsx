import { UISidebarComponent } from "./component";

export interface IndexProps {}

export const UISidebar = (indexProps: IndexProps) => {
	return <UISidebarComponent {...indexProps} />;
};
