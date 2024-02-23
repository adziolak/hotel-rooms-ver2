import type { FC } from "react"; 
import { Container, Anchor, Text, Flex } from '@mantine/core';
import { IconBrandGoogleHome } from "@tabler/icons-react";
import classes from "./Header.module.css";

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <Container size="xl" variant="gradient" py={"md"} h={60}>
                <Anchor href="/" underline="never" c="white" className={classes.logo}>
                    <Flex gap="xs" align="center">
                        <IconBrandGoogleHome />
                        <Text fw={800} fz="sm">BOOKING ROOM</Text>
                    </Flex>
                </Anchor>
            </Container>
        </header>
    )
}

export default Header;