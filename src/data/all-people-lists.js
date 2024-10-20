import { mapListsWithIds } from "../utils/map-lists-with-ids";
import { ALL_LIST_ITEMS, PEOPLE, TIMEFRAMES } from "./lists";

export const ALL_PEOPLE_LISTS = [
  mapListsWithIds(PEOPLE.EDGAR, [
    {
      ...TIMEFRAMES.BEFORE_SCHOOL,
      items: [
        ALL_LIST_ITEMS.BRUSH_TEETH,
        ALL_LIST_ITEMS.COMB_HAIR,
        ALL_LIST_ITEMS.WASH_FACE,
        ALL_LIST_ITEMS.PACK_BAG,
      ],
    },
    {
      ...TIMEFRAMES.AFTER_SCHOOL,
      items: [
        ALL_LIST_ITEMS.UNPACK_BAG,
        ALL_LIST_ITEMS.HOMEWORK,
        ALL_LIST_ITEMS.TIDY_ROOM,
      ],
    },
    {
      ...TIMEFRAMES.BEFORE_BED,
      items: [
        ALL_LIST_ITEMS.FEED_PETS,
        ALL_LIST_ITEMS.WASH_FACE,
        ALL_LIST_ITEMS.BRUSH_TEETH,
      ],
    },
  ]),
  mapListsWithIds(PEOPLE.ELLIOTT, []),
];
