//time no formato exemplo 08:00
export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
