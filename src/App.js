import React, {useState} from 'react';
import './App.css';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(Component, func) {
  return class extends React.Component{
    render() {
      return <Component date={func(this.props.date)}/>
    }
  };
}

function setFormatTime(date) {
  let value = ''
  switch (true) {
    case new Date().getMinutes() - new Date(date).getMinutes() > 60:
      value += new Date().getMinutes() - new Date(date).getMinutes() + ' минут назад'
      break;
    case new Date().getHours() - new Date(date).getHours() > 24:
      value += new Date().getHours() - new Date(date).getHours() + ' часов назад'
      break;
    case new Date().getTime() - new Date(date).getTime() > 86400000 :
      value += Math.floor((new Date().getTime() - new Date(date).getTime()) / 86400000) + ' дней назад'
      break;
    default:
      break;
  }
  console.log((new Date().getTime() - new Date(date).getTime()) / 86400000);
  return value
}

const Time = DateTimePretty(DateTime, setFormatTime)

function Video(props) {
    return (
        <div className="video">
            
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Time date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
