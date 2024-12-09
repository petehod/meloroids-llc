export const formatKey = (yayaKey: string, is_major: boolean) => {
  return `${yayaKey} ${is_major ? "Major" : "Minor"}`;
};
