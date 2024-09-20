const parseEventDate = (event_date) => {
    const isString = typeof event_date === 'string';
    if (!isString) return;
    const isEventDate = (event_date) => {const date = new Date(isString);
    return date instanceof Date && !isNaN(date);};
    if (isEventDate(event_date)) return event_date;
  };

  const parseString = (string) => {
    const isString = typeof string === 'string';
    if (!isString) return;

    const parsedString = parseInt(string);
    if (Number.isNaN(parsedString)) {
      return;
    }
    return parsedString;
  };

  export const parseFilterParams = (query) => {
    const { event_date, title, organizer } = query;

    const parsedEventDate = parseEventDate(event_date);
    const parsedTitle = parseString(title);
    const parsedOrganizer = parseString(organizer);

    return {
        event_date: parsedEventDate,
        title: parsedTitle,
        organizer: parsedOrganizer,
    };
  };
