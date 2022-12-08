import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
const FirstPost = (props) => {
  return (
    <Layout>
      <Head>
        <title>This is a post MF!</title>
      </Head>
      <h1>Just a page</h1>
    </Layout>
  );
};

export default FirstPost;
