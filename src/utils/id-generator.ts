import { v4 as uuidv4 } from "uuid"; // Import a reliable ID generation library
import { nanoid } from "nanoid";


/**
 * Generate a unique identifier, either a UUID or a nanoid.
 *
 * @param options An object containing options for the ID generation.
 * @param options.length The length of the nanoid to generate. Defaults to 12.
 * @param options.prefix The prefix to add to the generated ID. Defaults to an empty string.
 * @param options.suffix The suffix to add to the generated ID. Defaults to an empty string.
 * @param options.method The method to use for generating the ID. Defaults to "uuid". Must be either "uuid" or "nanoid".
 *
 * @returns A unique identifier as a string.
 */
export function generateId({ length = 12, prefix = "", suffix = "", method = "uuid" }: {
  length?: number;
  prefix?: string;
  suffix?: string;
  method: "uuid" | "nanoid";
}): string {
  let id = "";

  switch (method) {
    case "uuid":
      id = uuidv4();
      break;
    case "nanoid":
      id = nanoid(length);
      break;
  }

  return `${prefix}${id}${suffix}`;

}
