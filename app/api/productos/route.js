import mockData from "@/data/mockData";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request) {
  await sleep(1000);
  return NextResponse.json(mockData);
}
