import React from "react";
import Head from "next/head";
import AppLayout from "../componets/AppLayout";

const Signup = () => {
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
                <div>회원가입</div>
            </AppLayout>
        </>
    );
};

export default Signup;
