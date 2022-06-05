import { useGetTeacherListQuery } from "@better-semplan/client";
import { useNavigate } from "@better-semplan/ui/shared/react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import { TeacherListPageComponent } from "./component";

export interface IndexProps {}

export const TeacherListPage = (indexProps: IndexProps) => {
	const { data, loading, error } = useGetTeacherListQuery();
	const navigate = useNavigate();

	if (loading) {
		return <LoadingOverlay visible={true} />;
	}

	if (error) {
		navigate("errors/internal-server-error");
	}

	const teachers = data?.getTeacherList.teachers ?? [];
	return <TeacherListPageComponent {...indexProps} teachers={teachers} />;
};
