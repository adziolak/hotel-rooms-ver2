import type { FC, PropsWithChildren } from "react"; 
import Header from "./Header";
import Footer from "./Footer";
import { Container } from '@mantine/core';
import classes from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({
    children
}) => {
    return (        
        <div className={classes.layout}>        
            <Header />
            <Container size="xl" className={classes.content}>
                {children}
            </Container>            
            <Footer />
        </div>        
    )
}

export default Layout;