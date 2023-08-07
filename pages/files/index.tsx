"use client";

import { FileCard } from "@/components/FileCard";
import { File } from "@/types/File";
import React, { useState, useEffect } from "react";

export default function Files() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState<boolean>(false);

  useEffect(() => {
    setBusy(true);
    fetch("/api/files")
      .then((response) => response.json())
      .then((result) =>
        result.map((file: any) => ({
          ...file,
          createdAt: new Date(file.createdAt),
        }))
      )
      .then((result) => {
        setBusy(false);
        setFiles(result);
      });

    return () => {};
  }, []);

  if (busy) return <div>Loading...</div>;

  console.log(files);

  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {files.map((file) => (
          <li key={file.name}>
            <FileCard file={file} />
          </li>
        ))}
      </ul>
    </div>
  );
}
