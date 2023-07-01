const express = require('express');
const app = express();
const port = 3000;
let requestCount = 0;
// Serve files from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  requestCount++;
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
  requestCount++;
    res.send({ time: new Date().toISOString() });
});

const os = require('os');
const pidusage = require('pidusage');

setInterval(() => {
  // Memory stats
  console.log('---------------------------------');
  console.log('Total Requests:', requestCount);
  console.log('Total Memory:', os.totalmem());
  console.log('Free Memory:', os.freemem());
  const memoryUsage = process.memoryUsage();
  console.log('Node.js Process Memory Usage:', memoryUsage);

  // CPU stats
  pidusage(process.pid, (err, stats) => {
    console.log('CPU Usage:', stats.cpu);
  });

}, 5000);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
