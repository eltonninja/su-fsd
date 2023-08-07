import { File } from "@/types/File";

export function FileCard({ file }: { file: File }) {
  return (
    <div className="border-white border-solid border rounded-lg p-4">
      <div>{file.createdAt.toISOString()}</div>
      <div>{file.name}</div>
    </div>
  );
}
