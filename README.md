# http-proxy-bench
http proxy benchmark

API URI:
http://localhost:3000/run

Target:
url=http://www.google.com

Proxy:
proxy=http://proxy.hinet.net


Ex:
curl http://localhost:3000/run?url=http://www.google.com/&proxy=http://proxy.hinet.net



Benchmark


Install ab tool
apt-get install apache2-utils

10 concurrent request
100 total request
ab -c 10 -n 100 'http://localhost:3000/run?url=http://www.google.com/&proxy=http://proxy.hinet.net'


kaija@ubuntu:~/http-proxy-bench$ ab -c 10 -n 100 'http://localhost:3000/run?url=http://www.google.com/&proxy=http://proxy.hinet.net'
This is ApacheBench, Version 2.3 <$Revision: 1604373 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /run?url=http://www.google.com/&proxy=http://proxy.hinet.net
Document Length:        53072 bytes

Concurrency Level:      10
Time taken for tests:   3.765 seconds
Complete requests:      100
Failed requests:        13
   (Connect: 0, Receive: 0, Length: 13, Exceptions: 0)
Total transferred:      5327159 bytes
HTML transferred:       5307159 bytes
Requests per second:    26.56 [#/sec] (mean)
Time per request:       376.523 [ms] (mean)
Time per request:       37.652 [ms] (mean, across all concurrent requests)
Transfer rate:          1381.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:   178  278 245.0    243    2625
Waiting:      178  277 244.9    243    2625
Total:        178  278 245.0    243    2625

Percentage of the requests served within a certain time (ms)
  50%    243
  66%    262
  75%    277
  80%    295
  90%    329
  95%    434
  98%    490
  99%   2625
 100%   2625 (longest request)
