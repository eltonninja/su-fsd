import { File } from "@/types/File";
import { SortType } from "@/types/SortType";

export async function sortFiles(files: File[], sortType: SortType) {
  if (sortType === SortType.CreatedAt) {
    return files.sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf());
  }

  const isDescending = sortType === SortType.NameDescending;

  return files.sort(
    (a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true }) *
      (isDescending ? -1 : 1)
  );
}
