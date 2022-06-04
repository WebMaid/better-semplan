import { UIAppShell } from "@template/ui";
import { BrowserRouter, Route, Routes } from "@template/ui/router";
import { navbarItems } from "./navbarItems";
import { HomePage } from "./pages/home";
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
				</Routes>
			</UIAppShell>
		</BrowserRouter>
	);
};
