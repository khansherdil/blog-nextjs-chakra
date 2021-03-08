import Head from "next/head";
import blogPosts from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>1st {title}</h1>
        <p>{date}</p>
        <div>{content}</div>
      </main>
    </div>
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
