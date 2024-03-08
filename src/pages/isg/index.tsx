/** @format */

import Head from "next/head";

export default function IncrementStaticRegeneration({ data }: any) {
  return (
    <>
      <Head>
        <title> Increment static regeneration • Guy Dumais</title>
        <meta
          name="description"
          content="Example page using Static-Site Generation (SSG) with Next.js 11 and React 17"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="p-10 flex items-center flex-col">
        <h1 className="mb-10">Increment static regeneration (ISG)</h1>
        <p>
          Data fetched at build-time on the server-side before sending to the
          client.
        </p>
        <ul>{data}</ul>
      </div>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(
    "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1"
  );
  const data = await res.json();

  return {
    props: {
      data: data[0],
    },
    revalidate: 5,
  };
}
