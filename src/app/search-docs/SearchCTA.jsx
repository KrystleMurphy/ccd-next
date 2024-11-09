// components/SearchCTA.jsx
import SearchBar from "./SearchBar";

export default function SearchCTA() {
  return (
    <div id="searchCTA" className="bg-white py-12 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl text-center lg:text-left font-semibold tracking-tight text-ccDarkBlue sm:text-4xl">
            Already purchased?
            <br />
            Download your documentation
          </h2>
        </div>
        <div className="mt-10 flex flex-col items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 lg:w-1/2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
