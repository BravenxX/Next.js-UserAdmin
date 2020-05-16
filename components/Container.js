import Navigation from "./Navigation";
import Head from "next/head";

const Container = ({ children }) => (
  <div>
    <Head>
      <title>User Admin</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-4">{children}</div>
  </div>
);

export default Container;
