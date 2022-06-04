import { ApolloQueryResult, SubscribeToMoreOptions } from "@apollo/client";
import {
	CurrentUserQuery,
	useCurrentUserQuery,
	UserDto,
} from "../generated/graphql";

interface UseCurrentUserReturnProps {
	user: UserDto | null;
	refetch: () => Promise<ApolloQueryResult<CurrentUserQuery>>;
	subscribeToMore: (
		options: SubscribeToMoreOptions<
			CurrentUserQuery,
			{
				clientId: number;
			},
			{
				listenAuthChanges: { authenticated: boolean };
			}
		>
	) => () => void;
}

export const useCurrentUser = (): UseCurrentUserReturnProps => {
	const { data, refetch, subscribeToMore } = useCurrentUserQuery();
	return {
		user: data?.currentUser.user ?? null,
		refetch,
		subscribeToMore,
	};
};
