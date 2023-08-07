"use client";

import { FileCard } from "@/components/FileCard";
import { File } from "@/types/File";
import React, { useState, useEffect, ChangeEvent } from "react";

export default function Files() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState<boolean>(false);
  const [sortType, setSortType] = useState<SortType>(SortType.CreatedAt);

  const handleSortTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType);
  };

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
      <select value={sortType} onChange={handleSortTypeChange}>
        <option value={SortType.CreatedAt}>Created At</option>
        <option value={SortType.NameAscending}>a - z</option>
        <option value={SortType.NameDescending}>z - a</option>
      </select>
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
