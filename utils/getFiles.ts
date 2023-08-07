import { File } from "@/types/File";

const mockFiles = [
  { createdAt: new Date("2023-06-25 11:00"), name: "1abc.txt" },
  { createdAt: new Date("2023-06-25 12:00"), name: "abc.txt" },
  { createdAt: new Date("2023-06-25 13:00"), name: "01abc.txt" },
  { createdAt: new Date("2023-06-25 14:00"), name: "0010abc.txt" },
  { createdAt: new Date("2023-06-25 15:00"), name: "011abc.txt" },
  { createdAt: new Date("2023-06-25 16:00"), name: "20-abc.txt" },
  { createdAt: new Date("2023-06-25 17:00"), name: "021-abc.txt" },
  { createdAt: new Date("2023-06-25 18:00"), name: "002-abc.txt" },
  { createdAt: new Date("2023-06-25 19:00"), name: "cba.txt" },
  { createdAt: new Date("2023-06-25 20:00"), name: "abc010.txt" },
  { createdAt: new Date("2023-06-25 21:00"), name: "abc1.txt" },
];

export async function getFiles(): Promise<File[]> {
  const files = mockFiles;
  // wait for 1000ms
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return files;
}
