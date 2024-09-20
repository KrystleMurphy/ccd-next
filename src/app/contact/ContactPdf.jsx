"use client";

import { useState, useEffect } from "react";

function FileLink({ recordId }) {
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    async function fetchFile() {
      try {
        const response = await fetch(`/api/getFile?recordId=${recordId}`);
        const data = await response.json();
        setFileUrl(data.fileUrl);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    }

    fetchFile();
  }, [recordId]);
}

export default function MyPage() {
  return (
    <div>
      {/* Replace "recXXXXXXXXX" with an actual record ID */}
      <FileLink recordId={[0]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 ms-2 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </FileLink>
    </div>
  );
}
