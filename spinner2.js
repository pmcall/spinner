const collection = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ' ,'\r|   ', '\n'];
timeCounter = 100;

for (const animation of collection) {
  setTimeout(() => {
    process.stdout.write(animation);
  }, timeCounter);
  timeCounter += 200;
}