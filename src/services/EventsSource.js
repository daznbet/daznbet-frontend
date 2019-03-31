let evtSource
export default () => {
  evtSource = evtSource || new EventSource('http://localhost:4000/events');
  return evtSource
}
