import {FC} from "react";

export const Task: FC = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                    <div className="text-center md:text-left lg:pr-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Never miss
                            any task</h2>
                        <p className="mt-4 text-base text-gray-700 sm:mt-8 font-pj">Lorem ipsum dolor sit amet,
                            consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus
                            ac amet pellentesque aliquam enim.</p>

                        <div className="relative inline-flex mt-10 group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <a href="#" title=""
                               className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                               role="button">
                                Add First Task
                            </a>
                        </div>
                    </div>

                    <div>
                        <img className="w-full mx-auto"
                             src="https://cdn.rareblocks.xyz/collection/clarity/images/features/2/illustration.png"
                             alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
