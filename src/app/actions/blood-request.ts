"use server";

export async function newBloodRequest(values: Record<string, unknown>) {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
  }, 1000);
}
