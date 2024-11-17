'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { fetchAirtableData } from '@/src/app/data/AirtableData';

const SearchBar = ({ initialDocuments, initialNoRecordsFound }) => {
  const [lotNo, setLotNo] = useState('');
  const [documents, setDocuments] = useState(initialDocuments);
  const [noRecordsFound, setNoRecordsFound] = useState(initialNoRecordsFound);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setLotNo(event.target.value);
    setNoRecordsFound(false);
    setErrorMessage('');
    setIsSearchInitiated(false);
  };

  const handleSearch = async () => {
    const trimmedLotNo = lotNo.trim();

    if (!trimmedLotNo) {
      setErrorMessage('Please enter a lot number.');
      return;
    }

    if (!/^\d{5}$/.test(trimmedLotNo)) {
      setErrorMessage('Please enter exactly 5 digits.');
      return;
    }

    setIsSearchInitiated(true);
    setIsLoading(true);
    setNoRecordsFound(false);

    try {
      // Use the existing fetchAirtableData function directly
      const fetchedDocuments = await fetchAirtableData({
        baseName: 'Documentation',
        view: 'Grid view',
        filterByFormula: `{lotNo} = '${trimmedLotNo}'`,
      });

      setDocuments(fetchedDocuments);
      setNoRecordsFound(fetchedDocuments.length === 0);
      setError(null);
    } catch (err) {
      console.error('Error fetching documentation:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const renderDocumentation = (document) => {
    const documentUrl = document.fields.Document && document.fields.Document[0]?.url;

    return (
      <div key={document.id} className="mt-6 w-full flex justify-center">
        <div className="p-4 shadow-md rounded-md w-full lg:w-auto flex items-center gap-x-4 py-2 bg-white">
          <h5 className="text-lg font-medium text-gray-900">{document.fields.Device}</h5>
          {documentUrl && (
            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-x-2 text-blue-600 hover:text-blue-800"
            >
              <FolderOpenIcon className="h-6 w-6 text-gray-600" />
              Open
            </a>
          )}
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
        {isSearchInitiated && (
          <>
            {isLoading && <p className="p-4">Searching...</p>}
            {!isLoading && error && <p>Error: {error.message}</p>}
            {!isLoading && !error && documents.map(renderDocumentation)}
            {!isLoading && noRecordsFound && <p className="mt-4 text-red-500">No records found for lot number: {lotNo}</p>}
          </>
        )}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SearchBar;