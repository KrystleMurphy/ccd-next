import React, { useEffect, useState } from "react";
import airtableBase from "../utils/airtableapi";

function AirTable() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    airtableBase("Team")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          const formattedRecords = records.map((record) => {
            const photoField = record.get("Photo"); // Get the attachment field
            const photoUrl = Array.isArray(photoField) ? photoField[0]?.url : null; // Extract the URL
            return { ...record._rawJson, Photo: photoUrl }; 
          });
  
          setRecords(formattedRecords);
          fetchNextPage();
          console.log(formattedRecords)
        },
        (error) => {
          if (error) {
            setError(error);
            console.error(error);
          }
          setIsLoading(false);
        }
      );
  }, []);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      {records.map((record) => (
        <div key={record.id} style={{ padding: '30px' }}>
            <img
            style={{ height: "200px", paddingTop: '50px' }}
            src={record.Photo} 
            alt={`${record.fields.Name}'s photo`} 
          />
          <h2>{record.fields.Name}</h2>
          <h3>{record.fields.Role}</h3>
          <div style={{ width: '300px' }}><p>{record.fields.Description}</p></div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default AirTable;