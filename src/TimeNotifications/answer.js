function getSeconds(time) {
  const [h, m, s] = time.split(':');

  return Number(h) * 3600 + Number(m) * 60 + Number(s);
}

function timeNotifications(input) {
  const [now, numberOfInputs, ...times] = input.split('\n');

  return times
    .map((item) => {
      const then = getSeconds(item);
      const diff = getSeconds(now) - then;

      if (diff > 3600) {
        const hours = parseInt(diff / 3600);
        return hours > 1 ? `${hours} hours ago` : '1 hour ago';
      }

      if (diff > 60) {
        const minutes = parseInt(diff / 60);
        return minutes > 1 ? `${minutes} minutes ago` : '1 minute ago';
      }

      if (diff >= 1) {
        return diff > 1 ? `${diff} seconds ago` : '1 second ago';
      }

      return 'now';
    })
    .join('\n');
}

console.log(
  timeNotifications(`23:05:38
7
23:05:38
23:05:02
23:04:59
23:04:31
12:36:07
08:59:01
00:00:00`)
);
