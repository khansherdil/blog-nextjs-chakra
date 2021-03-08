import Head from "next/head";
import blogPosts from "../lib/data";
import ListBlogItem from "./components/ListBlogItem";
import Link from "next/link";
import {
  Text,
  Heading,
  Flex,
  Stack,
  Container,
  VStack,
  Box,
  Divider,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.lg" mt={8}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing={4}>
        {blogPosts.map((item) => (
          <ListBlogItem
            key={item.slug}
            slug={item.slug}
            title={item.title}
            date={item.date}
            content={item.content}
          />
        ))}
      </VStack>
    </Container>
  );
}
