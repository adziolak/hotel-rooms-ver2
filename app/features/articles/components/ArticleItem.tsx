import type { FC } from "react";
import type { Article } from "../typings";
import { Card, Group, Text, Badge, Image } from "@mantine/core"; 

const ArticleItem: FC<Article> = ({
    name,
    shortDescription,
    publicationDate,
    topic,
    image
}) => {

    return (
        <Card radius="md" p="md">
            <Card.Section>
                <Image radius="md" src={image}  />
            </Card.Section>

            <Card.Section>
                <Group mt="md">
                    <Text fz="xs" c="gray.5" fw={500}>
                        {publicationDate}
                    </Text>
                    <Badge size="md" variant="gradient" gradient={{ from: 'pink', to: 'grape', deg: 90 }}>
                        {topic}
                    </Badge>    
                </Group>

                <Text fz="lg" fw={700} mt="md">
                    {name}
                </Text>

                <Text fz="md" mt="xs" c="gray.6">
                    {shortDescription}
                </Text>
            </Card.Section>   
        </Card>
    )
}

ArticleItem.displayName = "ArticleItem";

export default ArticleItem;