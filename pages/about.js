import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading
          size="2xl"
          bgGradient="linear(to-r, red.200, blue.400)"
          bgClip="text"
        >
          About me
        </Heading>
      </main>
    </div>
  );
}
