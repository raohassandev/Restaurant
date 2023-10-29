export const formatDateAndTime = (isoDate: string) => {
  const now = new Date();
  const date = new Date(isoDate);
  const timeDiff = (now as any) - (date as any);
  const minutesAgo = Math.floor(timeDiff / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 1) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    return `Today at ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (daysAgo === 1) {
    return `Yesterday at ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    return (
      date.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " at " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }
};
