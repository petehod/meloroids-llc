export const formatKey = (yayaKey: string, is_major: boolean) => {
  return `${yayaKey} ${is_major ? "Major" : "Minor"}`;
};

export const formatChordsString = (input: string) => {
  if (!input || typeof input !== "string") {
    throw new Error("Input must be a valid string.");
  }

  return input
    .split(",")
    .map((value) => value.trim())
    .join(" ");
};
