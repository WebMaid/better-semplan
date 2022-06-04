import { refreshTokenCookieKey } from "@better-semplan/core";
import React, { createContext, useEffect, useState } from "react";
import {
	ListenAuthChangesDocument,
	useGenerateClientIdQuery,
	UserDto,
} from "../../generated/graphql";
import { useCurrentUser } from "../../hooks";
import { setAccessToken } from "../apollo-client";
import { getClientId, setClientId } from "./clientId";

interface IAuthContext {
	currentUser: UserDto | null;
	refetchCurrentUser: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
	currentUser: null,
	refetchCurrentUser: async () => {},
});

interface ProviderProps {
	children: JSX.Element | string;
}

export const AuthProvider = ({ children }: ProviderProps) => {
	const [currentUser, setCurrentUser] = useState<UserDto | null>(null);
	const { data } = useGenerateClientIdQuery({
		skip: getClientId() !== 0,
	});
	const { user, refetch, subscribeToMore } = useCurrentUser();

	useEffect(() => {
		setCurrentUser(user);
	}, [user]);

	const refetchCurrentUser = async () => {
		const { data } = await refetch();
		setCurrentUser(data.currentUser.user ?? null);
	};

	if (getClientId() === 0) {
		setClientId(data?.generateClientId.clientId ?? 0);
	}

	// update current user when subscription is triggered from auth change
	const subscribeToChanges = () => {
		subscribeToMore({
			document: ListenAuthChangesDocument,
			variables: {
				clientId: getClientId(),
			},

			updateQuery: (prev, data) => {
				console.log("GOT UPDATED");
				console.log(data);
				const updateCurrentUser = async () => {
					const { data } = await refetch();
					setCurrentUser(data.currentUser.user ?? null);
				};
				if (data.subscriptionData.data.listenAuthChanges.authenticated)
					updateCurrentUser();
				else {
					setCurrentUser(null);
					setAccessToken("");
					document.cookie = `${refreshTokenCookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
				}
				return prev;
			},
		});
	};

	useEffect(() => {
		subscribeToChanges();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				refetchCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
