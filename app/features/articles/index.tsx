import type { FC } from "react";
import { Box, SimpleGrid, Title, useMantineTheme } from "@mantine/core";
import ArticleItem from "./components/ArticleItem";
import articlesData from './mocks/articles.json';
import type { Article } from "./typings";

const articles: Article[] = articlesData as Article[];

const RecentArticles: FC = () => {
    const theme = useMantineTheme();

    return (
        <Box my="xl">           
            <Title>Recent articles</Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} mt="md" pt="xl" style={{ borderTop: `solid 1px ${theme.colors.gray[2]}` }}>
                {articles.map(article => (
                    <ArticleItem {...article} key={article.id} />
                ))}
            </SimpleGrid>      
        </Box>  
    )
}

RecentArticles.displayName = "RecentArticles";

export default RecentArticles;