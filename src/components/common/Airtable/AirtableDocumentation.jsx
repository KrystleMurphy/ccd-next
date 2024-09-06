import React, { useEffect, useState } from "react";
import airtableBase from "../../../utils/airtableapi";

function AirtableDocumentation({ tableName, view, renderItem, filterByFormula, setNoRecordsFound }) {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecords = () => {
      setIsLoading(true);
      airtableBase(tableName)
        .select({ view, filterByFormula })
        .eachPage(
          (records, fetchNextPage) => {
            const formattedRecords = records.map((record) => record._rawJson);
            setRecords(formattedRecords);
            console.log("Fetched Airtable records:", formattedRecords);
            fetchNextPage();
          },
          (error) => {
            if (error) {
              setError(error);
              console.error(error);
            }
            setIsLoading(false);
          }
        );
    };

    fetchRecords();
  }, [tableName, view, filterByFormula]);

  useEffect(() => {
    // Check if any records are found and update the noRecordsFound state
    if (records.length === 0 && !isLoading) {
      setNoRecordsFound(true);
    } else {
      setNoRecordsFound(false);
    }
  }, [records, isLoading, setNoRecordsFound]);

  if (isLoading) return <p className="p-4">Searching...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <>{records.map(renderItem)}</>;
}

export default AirtableDocumentation;
