import Head from "next/head";
import blogPosts from "../lib/data";
import Link from "next/link";
import { Text, Heading, Flex, Stack, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.md">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justify="center">
        <Heading>My Blog</Heading>
      </Flex>

      <div>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div>{item.date.toString()}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
