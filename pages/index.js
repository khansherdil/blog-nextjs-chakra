import Head from "next/head";
import blogPosts from "../lib/data";
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
          <div key={item.slug}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <Heading cursor="pointer">{item.title}</Heading>
              </Link>
              <Divider />
            </div>
            <Text fontSize="sm" mb={3}>
              {item.date.toLocaleString()}
            </Text>
            <Text>{item.content}</Text>
          </div>
        ))}
      </VStack>
    </Container>
  );
}
