export const mapListsWithIds = (person, lists) => ({
  ...person,
  id: person.key,
  lists: lists.map((list) => ({
    ...list,
    id: `${person.key}-${list.key}`,
    items: list.items.map((item) => ({
      ...item,
      id: `${person.key}-${list.key}-${item.key}`,
    })),
  })),
});
