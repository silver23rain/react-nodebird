import React from "react";
import Head from "next/head";
import AppLayout from "../componets/AppLayout";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.css"
                />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

export default NodeBird;
