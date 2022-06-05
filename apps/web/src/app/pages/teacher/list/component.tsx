import { TeacherDto } from "@better-semplan/client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Group, Table, TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IndexProps } from ".";

interface Props extends IndexProps {
	teachers: TeacherDto[];
}

export const TeacherListPageComponent = ({ teachers }: Props) => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t("teacher.list.title")}</h1>
			<Group>
				<TextInput
					icon={<FontAwesomeIcon icon={faSearch} />}
					placeholder={t("search.title")}
				/>
			</Group>
			<Table striped highlightOnHover>
				<thead>
					<tr>
						<th style={{ width: "50px" }}></th>
						<th>{t("teacher.properties.fullName")}</th>
						<th>{t("teacher.properties.hireDate.label")}</th>
						<th>{t("teacher.properties.workLoad.label")}</th>
					</tr>
				</thead>
				<tbody>
					{teachers.map((teacher) => (
						<tr key={teacher.id}>
							<td>
								<Avatar />
							</td>
							<td>{`${teacher.firstname} ${teacher.lastname}`}</td>
							<td>{teacher.hireDate}</td>
							<td>{teacher.workLoad}%</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
