import { TOTAL_WIDTH, WIDTH_CARD } from "./articles-constants";

/** Checks if the movement is not an edge case such as
 * swiping left on the first element
 * or swiping right in the last one */
export const isMovementInvalid = (
  movement: number,
  scrollPosition: number
): boolean => {
  return (
    (movement < 0 && scrollPosition === 0) ||
    (movement > 0 && scrollPosition === 7)
  );
};
