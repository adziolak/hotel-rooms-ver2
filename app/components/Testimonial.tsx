import { type FC, type PropsWithChildren, type SVGAttributes, type ReactElement, cloneElement } from "react";
import { ThemeIcon, Text, Flex, rem } from "@mantine/core"; 

interface Props {
    title: string;
    icon: ReactElement<SVGAttributes<HTMLOrSVGElement>>;
}

const Testimonial: FC<PropsWithChildren<Props>> = ({
    title,
    icon,
    children
}) => {
    return (
        <Flex mt={20} align={"center"} direction={"column"}>
            <ThemeIcon size={60} radius={60} mx="auto" color="violet">
                {cloneElement(icon, {  
                    style: { width: rem(32), height: rem(32) }
                })}                      
            </ThemeIcon>

            <Text ta="center" fw={700} mt="md" fz="xl">
                {title}
            </Text>
            <Text c="gray.8" ta="center" fz="md" mt="sm">
                {children}
            </Text>
        </Flex>     
    )
}

export default Testimonial;