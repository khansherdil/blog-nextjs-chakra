import Head from "next/head";
import blogPosts from "../../lib/data";
import {
  Heading,
  Text,
  Container,
  VStack,
  Stack,
  Divider,
} from "@chakra-ui/react";

export default function BlogPage({ title, date, content }) {
  return (
    <Container maxW="container.md">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Heading size="xl">{title}</Heading>
        <Divider />
        <Text fontSize="sm">{date}</Text>
        <div>{content}</div>
      </Stack>
    </Container>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  const foo = {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };

  console.log(JSON.stringify(foo, null, ""));
  return foo;
}
