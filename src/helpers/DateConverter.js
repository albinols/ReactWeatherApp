const DateConverter = (unixTime) => {

  const zeroFormatting = (nr) => {

    return nr > 9 ? nr : "0" + nr;

  }

  const captialLetterAtStart = (string) => {

    // return string.charAt(0).toUpperCase() + string.slice(1)
    return string.slice(0,1).toUpperCase() + string.slice(1);

  }

  const fullDate = (unixTime) => {
   
    const date = new Date(unixTime * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // Month is 0-indexed, so add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${zeroFormatting(month)}-${zeroFormatting(day)} ${hours}:${minutes}:${seconds}`;

  }

  // const weekDayName = (unixTime) => {

  //   const date = new Date(unixTime * 1000);

  //   const day = date.getDay();
  //   const dayName = date.toLocaleString('default', { weekday: 'long' });
  //   const month = date.toDateString('default', { month: 'long'});

  //   return `${captialLetterAtStart(dayName)} ${(day)}-${month}`

  // }

  const weekDayMonth = (unixTime) => {

    const date = new Date(unixTime * 1000);

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    }

    return captialLetterAtStart(new Intl.DateTimeFormat("en-US", options).format(date));

  }

  const weekDayMonthShort = (unixTime) => {

    const date = new Date(unixTime * 1000);

    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
    }

    return captialLetterAtStart(new Intl.DateTimeFormat("en-US", options).format(date));

  }

  const timeOnly = (unixTime) => {

    const date = new Date(unixTime * 1000);

    return `${zeroFormatting(date.getHours())}:${zeroFormatting(date.getMinutes())}`;
  }

  return {

    fullDate: fullDate(unixTime),
    weekDayMonth: weekDayMonth(unixTime),
    timeOnly :timeOnly(unixTime),
    weekDayMonthShort :weekDayMonthShort(unixTime),

  };
    
}

export default DateConverter;