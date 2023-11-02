import React from "react";
import RootLayout from "@/app/layout";

interface Props {}

const ContactPage: React.FC<Props> = () => {
    return (
        <RootLayout hideBackground={true}>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Contact Us</h1>
                        </header>
                        <p className="lead mb-6">If you have any questions or would like to get in touch with us, please drop us an email at:</p>
                        <p className="text-xl text-blue-500">
                            <a href="mailto:contact@example.com">contact@example.com</a>
                        </p>
                    </article>
                </div>
            </main>
        </RootLayout>
    );
};

export default ContactPage;
