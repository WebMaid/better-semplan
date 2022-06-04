import { HomePageComponent } from "./component";

export interface IndexProps {}

export const HomePage = (indexProps: IndexProps) => {
	return <HomePageComponent {...indexProps} />;
};
