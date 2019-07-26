export const BOTTOM = 1;
export const CENTER = 2;
export const RIGHT = 4;
export const FLIP_RTL = 8;

export const CornerMap = {
  BOTTOM,
  CENTER,
  RIGHT,
  FLIP_RTL,
  TOP_LEFT: 0,
  TOP_RIGHT: RIGHT,
  BOTTOM_LEFT: BOTTOM,
  BOTTOM_RIGHT: BOTTOM | RIGHT,
  TOP_START: FLIP_RTL,
  TOP_END: FLIP_RTL | RIGHT,
  BOTTOM_START: BOTTOM | FLIP_RTL,
  BOTTOM_END: BOTTOM | RIGHT | FLIP_RTL
}