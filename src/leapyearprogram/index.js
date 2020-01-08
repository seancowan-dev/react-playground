function leapYear(year) {
    if (year <= 1581) {
      throw new error('Years before 1582 are not leap years');
    } else {
      if (year % 400 === 0) {
        return true
      } else {
        if (year % 4 === 0 && year % 100 != 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  export default leapYear;