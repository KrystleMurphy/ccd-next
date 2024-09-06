import React, { useState } from "react";
import { MagnifyingGlassIcon, FolderArrowDownIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import AirtableDocuments from "../common/Airtable/AirtableDocumentation";

const SearchBar = () => {
  const [lotNo, setLotNo] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [noRecordsFound, setNoRecordsFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);

  const handleInputChange = (event) => {
    setLotNo(event.target.value);
    setNoRecordsFound(false);
    setErrorMessage("");
    setIsSearchInitiated(false);
  };

  const handleSearch = () => {
    const trimmedLotNo = lotNo.trim(); // Trim whitespace
    if (!trimmedLotNo) {
      setErrorMessage("Please enter a lot number.");
      return;
    }

    if (!/^\d{5}$/.test(trimmedLotNo)) {
      setErrorMessage("Please enter exactly 5 digits.");
      return;
    }

    setIsSearchInitiated(true);
    setSearchTrigger((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const renderDocumentation = (post) => {
    const documentUrl = post.fields.Document && post.fields.Document[0]?.url;
    const documentName = post.fields.Document && post.fields.Document[0]?.filename;

    return (
      <div key={post.id} className="mt-6 w-full flex justify-center">
        <div className="p-4 shadow-md rounded-md w-full lg:w-auto flex items-center gap-x-4 py-2 bg-white">
          <h5 className="text-lg font-medium text-gray-900">{post.fields.Device}</h5>
          <a
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-x-2 text-blue-600 hover:text-blue-800"
          >
            <FolderOpenIcon className="h-6 w-6 text-gray-600" />
            Open
          </a>

          {/* <a
            href={documentUrl}
            download={documentName}
            className="ml-auto flex items-center gap-x-2 text-blue-600 hover:text-blue-800"
          >
            <FolderArrowDownIcon className="h-6 w-6 text-gray-600" />
            Download
          </a> */}
        </div>
      </div>
    );
  };

  return (
    <div>
      <label htmlFor="lotNo" className="block text-sm font-medium leading-6 text-gray-600">
        Enter your lot number
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            L
          </div>
          <input
            id="lotNo"
            name="lotNo"
            type="text"
            placeholder="XXXXX"
            value={lotNo}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="button"
          onClick={handleSearch}
          className="rounded-none rounded-r-md relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 bg-gray-50"
        >
          <MagnifyingGlassIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
          Search
        </button>
      </div>

      <div aria-live="polite" className="mt-4">
        {isSearchInitiated && /^\d{5}$/.test(lotNo) && (
          <AirtableDocuments
            key={searchTrigger}
            tableName="Documentation"
            view="Grid view"
            renderItem={renderDocumentation}
            setNoRecordsFound={setNoRecordsFound}
            filterByFormula={`{lotNo} = '${lotNo}'`}
          />
        )}
        {noRecordsFound && (
          <p className="mt-4 text-red-500">No records found for lot number: {lotNo}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
