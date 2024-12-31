import React from 'react';
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import StartupForm from "@/components/StartupForm";

const Page = async () => {

    const session = await auth();
    if (!session)  redirect('/');
    return (
        <>
            <section className="pink_container !min-h[230px]">
                <h1 className="heading">
                    Pitch Your Startup
                    Connect With Entrepreneurs  </h1>
            </section>

            <StartupForm/>
        </>
    );
};

export default Page;
