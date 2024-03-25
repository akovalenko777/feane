import CountUp from "react-countup";

export default function Counters(){
  const arCounters = [
    {
      end: 1234,
      prefix: '',
      label: 'Projects'
    },
    {
      end: 236,
      prefix: '',
      label: 'Clients'
    },
    {
      end: 347800,
      prefix: '$ ',
      label: 'Profit'
    }
  ]

  return <div className="counters-block">
    <div className="container">
      {arCounters.map(item => (
        <div className="counter-item">
          <div className="value">
            <CountUp end={item.end} separator=" " duration="4" prefix={item.prefix} />
          </div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
}