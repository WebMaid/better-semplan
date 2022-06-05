import { TeacherListPageComponent } from "./component";

export interface IndexProps {}

export const TeacherListPage = (indexProps: IndexProps) => {
	const teachers: any[] = [
		{
			id: "1",
			firstname: "Nadja",
			lastname: "Burri",
			workLoad: 50,
			hireDate: "2015-03-02",
		},
	];
	return <TeacherListPageComponent {...indexProps} teachers={teachers} />;
};
