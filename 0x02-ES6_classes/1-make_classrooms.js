import classroom from './0-classroom';

export default function initializeRooms() {
  // eslint-disable-next-line new-cap
  return [new classroom(19), new classroom(20), new classroom(34)];
}
