// Step One: Write getSleepHours function
const getSleepHours = (day) => {
    // Step Two: if/else statements
      if(day === 'monday') {
        return 8;
      } else if (day === 'tuesday') {
        return 7;
      } else if (day === 'wednesday') {
        return 6;
      } else if (day === 'thursday') {
        return 7;
      } else if (day === 'friday') {
        return 7;
      } else if (day === 'saturday') {
        return 9;
      } else if (day === 'sunday') {
        return 8
      } else {
        return 'Error'
      }
    }
    // Step 3: Test function
    // console.log(getSleepHours('monday'))
    // console.log(getSleepHours('wednesday'))
    // console.log(getSleepHours('friday'))
    
    // Step 4: Make function for sleep hours that show the total sleep hours, ideal sleep hours and calculates sleep debt
    const getActualSleepHours = () => 
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday')
    
    // Step 5: Log both functions to make sure they work 
    // console.log(getSleepHours('monday'));
    // console.log(getActualSleepHours())
    
    // Step 6: Make function getIdealSleepHours
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };
    
    // Step 7: Log function to make sure it works 
    // console.log(getIdealSleepHours()) 
    
    // Step 8: Write function to calculate sleep debt 
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
    // Step 9: if/else statements
      if(actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep')
      } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed')
      } else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest')
      } else {
        console.log('Error!')
      }
    };
    
    calculateSleepDebt('saturday')
    
    