export const formatDate = (dateString: string): string => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  return new Date(dateString).toLocaleDateString("nl-NL", options);
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString();
  const removeSeconds = time.split(":");

  return removeSeconds.slice(0, -1).join(":");
};
