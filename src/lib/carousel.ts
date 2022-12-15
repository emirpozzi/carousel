import { TOTAL_WIDTH, WIDTH_CARD } from "./articles-constants";

/** Checks if the movement is not an edge case such as
 * swiping left on the first element
 * or swiping right in the last one */
export const isMovementInvalid = (
  movement: number,
  offset: number
): boolean => {
  return (
    (movement < 0 && offset === WIDTH_CARD) ||
    (movement > 0 && offset === TOTAL_WIDTH)
  );
};
