// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { File } from "@/types/File";
import { SortType } from "@/types/SortType";
import { getFiles } from "@/utils/getFiles";
import { sortFiles } from "@/utils/sortFiles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<File[]>
) {
  const sortType: SortType = req.query["sortType"] as SortType;
  const files = await getFiles();
  const sortedFiles = await sortFiles(files, sortType);
  res.status(200).json(sortedFiles);
}
