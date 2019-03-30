var evtSource = new EventSource('http://localhost:4000/events');

evtSource.onopen = (e) => {
}

evtSource.addEventListener('event', (e) => {
  console.log(e)
})
//
// export default (event) => new Promise((resolve, reject) => {
//   var evtSource = new EventSource('http://localhost:4000/events');
//
//   evtSource.onopen = (e) => {
//
//   }
// })
