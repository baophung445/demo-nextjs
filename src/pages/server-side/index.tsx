/** @format */

import Head from "next/head";
import { DataJson } from "../static-site";

export default function ServerSideRendering({ data }: any) {
  return (
    <>
      <Head>
        <title>Server-Side Rendering (SSR) • Guy Dumais</title>
        <meta
          name="description"
          content="Example page using Server-Side Rendering (SSR) with Next.js 11 and React 17"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="p-10 flex items-center flex-col">
        <h1 className="mb-10">Server-Side Rendering (SSR)</h1>
        <p>
          Data fetched on the server-side at <b>each</b> request before sending
          to the client.
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`
  );
  const data = await res.json();

  return { props: { data: data[0] } };
}
