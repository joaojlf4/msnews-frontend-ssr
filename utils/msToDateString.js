export default function(str){
  return {
    getReadableDate(){
      const dateArray = str.split('-');
      const year = dateArray[0];
      const month = dateArray[1];
      const timeDayArray = dateArray[2].split('T');
      const day = timeDayArray[0];
      return `${day}/${month}/${year}`;
    },
    getHours(){
      const dateArray = str.split('-');
      const timeDayArray = dateArray[2].split('T');
      const timeZ = timeDayArray[1].split('.');
      const time = timeZ[0];
      const timeNoSecs = time.split(':');
      return `${timeNoSecs[0]}:${timeNoSecs[1]}`;
    }
  }
}
// 2020-03-23T15:18:20.022Z