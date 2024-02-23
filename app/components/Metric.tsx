import { type FC } from "react";
import { Text, Flex } from '@mantine/core';

interface Props {
    title: string;
    counter: number;
}

const Metric: FC<Props> = ({
    title,
    counter    
}) => {
  return (
    <Flex direction={"column"} align={"center"}>    
        <Text fw={600} style={{ fontSize: "3rem" }}>
          {counter}
        </Text>
        <Text size="md" c="gray.7">
          {title}
        </Text>      
    </Flex>
  );
};

Metric.displayName = "Metric";

export default Metric;