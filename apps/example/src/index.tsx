import { AuthProvider, DefaultApolloProvider } from "@template/client";
import { LanguageProvider } from "@template/main";
import "@template/main/translations/i18n";
import { UIProvider } from "@template/ui";
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
