/** @format */

import Head from "next/head";
import { useEffect, useState } from "react";

// Page component
export default function ClientSideRendered() {
  const [state, setState] = useState([] as any);

  const getData = async () => {
    const response = await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    setState(result[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Client-Side Rendering (CSR) • Guy Dumais</title>
        <meta
          name="description"
          content="Example page using Client-Side Rendering (CSR) with Next.js 11 and React 17"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="p-10 flex items-center flex-col">
        <h1 className="mb-10">Client-Side Rendering (CSR)</h1>
        <p>Data fetched on the client-side only.</p>
        <ul>{state ? state : "Loading..."}</ul>
      </div>
    </>
  );
}
