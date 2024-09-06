// import React, { useEffect, useState } from "react";
// import airtableBase from "../../../utils/airtableapi";

// function Airtable({ tableName, view, renderItem, onRecordsFetched }) {
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const allRecords = []; // To accumulate all records without duplicates
  
//     airtableBase(tableName)
//     .select({ view })
//     .eachPage(
//         (records, fetchNextPage) => {
//           const formattedRecords = records.map((record) => record._rawJson); 
//           allRecords.push(...formattedRecords);
//           console.log("Fetched Airtable records:", formattedRecords);
//           fetchNextPage();
//         },
//         (error) => {
//           if (error) {
//             setError(error);
//             console.error(error);
//           } else {
//             setRecords(allRecords); // Set all accumulated records at once
//             if (onRecordsFetched) {
//               console.log("Calling onRecordsFetched with fetched records.");
//               onRecordsFetched(allRecords); // Pass all records at once to the callback
//             }
//           }
//         }
//       );
//   }, [tableName, view, onRecordsFetched]);

//   // if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return <>{records.map(renderItem)}</>;
// }

// export default Airtable;

// components/Airtable.jsx
import React from 'react';

function Airtable({ records, renderItem }) {
  if (!records || records.length === 0) return <p>No records found.</p>;

  return <>{records.map(renderItem)}</>;
}

export default Airtable;
