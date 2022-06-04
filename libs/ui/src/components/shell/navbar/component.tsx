import {
	Avatar,
	Box,
	Group,
	Navbar,
	ScrollArea,
	Text,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { AuthContext } from "@template/client";
import { useContext } from "react";
import { IndexProps } from ".";
import { UINavbarLink } from "./item";
interface Props extends IndexProps {}

export const UINavbarComponent = ({ opened, items }: Props) => {
	const theme = useMantineTheme();
	const { currentUser } = useContext(AuthContext);

	return (
		<Navbar
			p='md'
			hiddenBreakpoint='sm'
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<Navbar.Section component={ScrollArea} grow mt='md'>
				<div>
					{items.map((i) => (
						<UINavbarLink {...i} key={i.label} />
					))}
				</div>
			</Navbar.Section>
			{!currentUser ? null : (
				<Navbar.Section>
					<Box
						sx={{
							paddingTop: theme.spacing.sm,
							borderTop: `1px solid ${
								theme.colorScheme === "dark"
									? theme.colors.dark[4]
									: theme.colors.gray[2]
							}`,
						}}
					>
						<UnstyledButton
							sx={{
								display: "block",
								width: "100%",
								padding: theme.spacing.xs,
								borderRadius: theme.radius.sm,
								color:
									theme.colorScheme === "dark"
										? theme.colors.dark[0]
										: theme.black,

								"&:hover": {
									backgroundColor:
										theme.colorScheme === "dark"
											? theme.colors.dark[6]
											: theme.colors.gray[0],
								},
							}}
						>
							<Group>
								<Avatar
									src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
									radius='xl'
								/>
								<Box sx={{ flex: 1 }}>
									<Text size='sm' weight={500}>
										{currentUser?.username}
									</Text>
									<Text color='dimmed' size='xs'>
										{currentUser?.mail}
									</Text>
								</Box>

								{/*theme.dir === 'ltr' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />*/}
							</Group>
						</UnstyledButton>
					</Box>
				</Navbar.Section>
			)}
		</Navbar>
	);
};
