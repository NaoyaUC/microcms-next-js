import { format, parseISO} from "date-fns";

export default function Date({dateString}){
  const date = parseISO(dateString);
  return <span dateTime={dateString}>{format(date, 'yyyy年M月dd日')}</span>
}