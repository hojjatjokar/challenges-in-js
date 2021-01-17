# Time Notifications

You are given the current time R in the `HH:MM:SS` format. You are also given N
more time values in an array P. Where every element P[i] is less than or equal
to R.

Write a program to calculate the time differene between P[i] and R and print one
of the following messages accordingly:

- if the time difference is zero, print `now`
- if the time difference is in seconds but less than a minute,print
  `X seconds a go`
- if the time differnce is in minutes but less than an hour, print X minutes
  ago. Ignore the seconds part of the difference.
- if the time differenc is in hours, print X hours ago. Ignore the minutes and
  seconds part of the difference
- if the value of X is 1, print the word second instead of seconds, hour instead
  of hours and minute instead of minutes

## Input format

- First line: R (in the HH: MM: SS format)
- Second line: N
- Next N lines: P[i] (in the HH:MM:SS format, where 0 <= i < N )

## Output format

For each P[i], print the message indicating the time difference.

## Constraints

- 0 <= HH <= 23
- 0 <= MM <= 59
- 0 <= SS <= 59
- 1 <= N <= 1000

## Sample Input 1

```
23:05:38
7
23:05:38
23:05:02
23:04:59
23:04:31
12:36:07
08:59:01
00:00:00
```

## Sample Output 1

```
now
36 seconds ago
39 seconds ago
1 minute ago
10 hours ago
14 hours ago
23 hours ago

```
