/** @format */

import Head from "next/head";

export type Data = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type DataJson = {
  jsonData: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
  };
};

// Page component  static site generation
export default function StaticSideGeneration({ data }: any) {
  console.log("data", data);
  return (
    <>
      <Head>
        <title>Static-Site Generation (SSG) • Guy Dumais</title>
        <meta
          name="description"
          content="Example page using Static-Site Generation (SSG) with Next.js 11 and React 17"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="p-10 flex items-center flex-col">
        <h1 className="mb-10">Static-Site Generation (SSG)</h1>
        <p>
          Data fetched at build-time on the server-side before sending to the
          client.
        </p>
        <ul>
          {/* {jsonData?.jsonData?.data?.map((e) => (
            <li key={e.id}>{e.email}</li>
          ))} */}

          {data}
        </ul>
      </div>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch(
    "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1"
  );
  const data = await res.json();

  return {
    props: {
      data: data[0],
    },
  };
}
