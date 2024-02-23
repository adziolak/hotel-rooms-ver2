import type { FC } from "react"; 
import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <Container size="xl" h={40}>                
                <Text c="white" fw={600}>&copy; 2024 All rights reserved</Text>                
            </Container>
        </footer>
    )
}

export default Footer;