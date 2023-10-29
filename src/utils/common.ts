export const wait = (milliseconds: number | undefined, callback: () => void) => {
  setTimeout(callback, milliseconds);
};

export const hoursList = () => {
  const hoursArray = [];

  for (let i = 1; i <= 12; i++) {
    hoursArray.push({ value: `${i}:00 AM` });
    // hoursArray.push({ value: `${i}:30 AM` });
  }

  for (let i = 1; i <= 12; i++) {
    hoursArray.push({ value: `${i}:00 PM` });
    // hoursArray.push({ value: `${i}:30 PM` });
  }
  return hoursArray;
};

export const preparationTime = (maxHours = 5) => {
  const timeArray = [];

  for (let hours = 0; hours <= maxHours; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 15) {
      const hourString = String(hours).padStart(2, "0");
      const minuteString = String(minutes).padStart(2, "0");
      timeArray.push({ value: `${hourString}:${minuteString}` });
    }
  }

  return timeArray;
};

export const converToFormData = (obj: Record<string, any>, formData = new FormData()) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      converToFormData(value, formData);
    } else {
      formData.append(key, value);
    }
  }
  
  return formData;
};


