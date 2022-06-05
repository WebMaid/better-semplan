import { TeacherListPageComponent } from "./component";

export interface IndexProps {}

export const TeacherListPage = (indexProps: IndexProps) => {
	return <TeacherListPageComponent {...indexProps} />;
};
