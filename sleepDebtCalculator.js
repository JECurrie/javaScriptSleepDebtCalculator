
const getSleepHours = day => {
  if (day === 'monday') {
    return 1;
  } else if (day === 'tuesday') {
    return 2;
  } else if (day === 'wednesday') {
    return 3;
  }
    else if (day === 'thursday') {
    return 4;
  }
    else if (day === 'friday') {
    return 5;
  }
    else if (day === 'saturday') {
    return 6;
  }
   else if (day === 'sunday') {
    return 7;
  }
}
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours  === idealSleepHours) {
      console.log('The user got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`);
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
    };
};
calculateSleepDebt();
