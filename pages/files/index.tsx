"use client";

import { FileCard } from "@/components/FileCard";
import { File } from "@/types/File";
import { SortType } from "@/types/SortType";
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
    fetch(`/api/files?sortType=${sortType}`)
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
  }, [sortType]);

  if (busy) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4 p-4">
      <select
        value={sortType}
        onChange={handleSortTypeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
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
