// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { File } from "@/types/File";
import { getFiles } from "@/utils/getFiles";
import { sortFiles } from "@/utils/sortFiles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<File[]>
) {
  const files = await getFiles();
  const sortedFiles = await sortFiles(files);
  res.status(200).json(sortedFiles);
}
