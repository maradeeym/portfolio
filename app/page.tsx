import { Spotlight } from "@/components/Spotlight";

export default function Home() {
  return (
<main className="relative">
    <Spotlight className="absolute -top-40 left-1/3 md:left-1/3 md:-top-20" />
    <section className="h-screen">
        <div className="relative flex flex-col items-center justify-center py-40">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 z-10">
                Martin<br/>Web Developer
            </h1>
            <div className="flex flex-wrap justify-around space-x-4 justify-items-center p-10 relative z-10">
                <a href="https://github.com/maradeeym" target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                    Github
                </a>
                <a href="mailto:martin.kalliola@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                    Email
                </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-50 z-0"></div>
        </div>
    </section>
</main>

    
  );
}

