export const addZero = n => n<10?'0'+n:''+n

export function formatDate(date){
  const d = new Date(date)
  return `${addZero(d.getDate())}.${addZero(d.getMonth()+1)}.${d.getFullYear()} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`
}

export const formatTitle = title => title.replaceAll('&#039;', '’').replaceAll('&#8217;', '’').replaceAll('&#8212;', '—')
