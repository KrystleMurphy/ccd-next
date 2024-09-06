import Methica_CC_prototype_2 from "../../../../src/assets/images/Methica_CC_prototype_2.jpg";
// import { InformationCircleIcon } from "@heroicons/react/outline";

export default function FeaturedNews() {

    const post = {
        description: "This is a sample description for the featured news."
    };

    return (
        <div className="relative bg-sky-500 px-6 py-32 lg:px-8">
            <div className="text-left mx-auto max-w-3xl text-base leading-7 text-gray-700">
                {/* <p className="text-base font-semibold leading-7 text-ccDarkBlue">Introducing</p> */}
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discover the Latest Advancements in Cervical Cancer Detection</h1>
                <figure className="mt-16">
                    <img
                        alt="Description of the image"
                        src={Methica_CC_prototype_2}
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        {/* <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" /> */}
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>
                <p className="mt-6 text-xl leading-8">{post.description}</p>
                <div className="mt-10 max-w-2xl">
                    {/* Add content here if needed */}
                </div>
            </div>
        </div>
    );
}
