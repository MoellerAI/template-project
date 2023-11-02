import React from "react";
import RootLayout from "@/app/layout";

interface Props {}

const AboutPage: React.FC<Props> = () => {
    return (
        <RootLayout hideBackground={true}>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="./about_picture.jpeg" alt="Mads Møller" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                                            Mads Møller
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Software Developer with a focus on NLP</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            <time dateTime="2022-02-08" title="February 8th, 2022">
                                                Nov 1, 2023
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                About the template project
                            </h1>
                        </header>
                        <p className="lead mb-2">
                            The template project is a fully functional full-stack application. It serves the purpose of being a complete template to build SaaS
                            products. It includes a variety of different features where the most significant ones are:
                        </p>
                        <ul className="flex-1 mb-6 text-gray-400">
                            <li className="flex mb-2 space-x-2">Backend (using FastAPI)</li>
                            <li className="flex mb-2 space-x-2">Frontend (using react-tailwind)</li>
                            <li className="flex mb-2 space-x-2">User authentication (using firebase)</li>
                            <li className="flex mb-2 space-x-2">User payment (using swift)</li>
                        </ul>
                        <p className="lead mb-2">
                            The template project is a fully functional full-stack application. It serves the purpose of being a complete template to build SaaS
                            products. It includes a variety of different features where the most significant ones are:
                        </p>
                        <p className="lead mb-2">
                            The template project is a fully functional full-stack application. It serves the purpose of being a complete template to build SaaS
                            products. It includes a variety of different features where the most significant ones are:
                        </p>
                        <p className="lead mb-2">
                            The template project is a fully functional full-stack application. It serves the purpose of being a complete template to build SaaS
                            products. It includes a variety of different features where the most significant ones are:
                        </p>
                        <p className="lead mb-2">
                            The template project is a fully functional full-stack application. It serves the purpose of being a complete template to build SaaS
                            products. It includes a variety of different features where the most significant ones are:
                        </p>
                    </article>
                </div>
            </main>
        </RootLayout>
    );
};

export default AboutPage;
