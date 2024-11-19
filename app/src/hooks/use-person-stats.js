import { useContext, useMemo } from "react";
import { AppContext } from "../context";
import { useParams } from "react-router-dom";

const getPersonPoints = (entries, today) => {
  let totalPoints = 0;
  let todayPoints = 0;
  entries.forEach((entry) => {
    if (entry.date === today) {
      todayPoints += entry.points;
    }
    totalPoints += entry.points;
  });
  if (!totalPoints) totalPoints = 0;
  if (!todayPoints) todayPoints = 0;
  return { totalPoints, todayPoints };
};

export const usePersonStats = () => {
  const { slug } = useParams();
  const { persons, listEntries, todayDate } = useContext(AppContext);

  const person = useMemo(
    () => persons.find((per) => per.slug === slug),
    [persons, slug]
  );

  const entries = useMemo(
    () => listEntries.filter((entry) => entry.personId === person?.id),
    [listEntries, person]
  );

  const { totalPoints, todayPoints } = useMemo(
    () => getPersonPoints(entries, todayDate),
    [entries, todayDate]
  );

  return {
    person,
    entries,
    totalPoints,
    todayPoints,
  };
};
