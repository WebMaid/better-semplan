import { UIAppShell } from "@better-semplan/ui";
import {
	BrowserRouter,
	Route,
	Routes,
} from "@better-semplan/ui/shared/react-router-dom";
import { navbarItems } from "./navbarItems";
import { HomePage } from "./pages/home";
import { TeacherListPage } from "./pages/teacher/list";
import { UserLoginPage } from "./pages/user/login";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<UIAppShell navbarItems={navbarItems}>
				<Routes>
					<>
						<Route path='/' element={<HomePage />} />
						<Route path='/home' element={<HomePage />} />
					</>
					<>
						<Route path='/login' element={<UserLoginPage />} />
						<Route path='/signin' element={<UserLoginPage />} />
					</>
					<>
						<Route path='/teachers' element={<TeacherListPage />} />
					</>
				</Routes>
			</UIAppShell>
		</BrowserRouter>
	);
};
