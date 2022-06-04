import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

interface Props {
	children?: JSX.Element | JSX.Element[] | string;
}

export const DefaultApolloProvider = ({ children }: Props) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
