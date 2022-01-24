import { ConfigProvider } from "antd";
import Head from "next/head";
import React, { FunctionComponent, ReactNode, useEffect } from "react";

import TopBar from "./topBar/topBar";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout: FunctionComponent<Props> = ({
  children,
  title = "PeerPlays",
  description = "",
}: Props) => {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: "#0148BE",
        errorColor: "#ff4d4f",
        warningColor: "#faad14",
        successColor: "#52c41a",
        infoColor: "#1890ff",
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title} | PeerPlays</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <ConfigProvider>
        <main>{children}</main>
      </ConfigProvider>
    </>
  );
};

export default Layout;