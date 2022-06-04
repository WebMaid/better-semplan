import { AuthProvider, DefaultApolloProvider } from "@better-semplan/client";
import { LanguageProvider } from "@better-semplan/main";
import "@better-semplan/main/translations/i18n";
import { UIProvider } from "@better-semplan/ui";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { spotlightActions } from "./constants/spotlight";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<LanguageProvider>
			<DefaultApolloProvider>
				<UIProvider spotlightActions={spotlightActions}>
					<AuthProvider>
						<App />
					</AuthProvider>
				</UIProvider>
			</DefaultApolloProvider>
		</LanguageProvider>
	</React.StrictMode>
);
