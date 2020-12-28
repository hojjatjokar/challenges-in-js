function numberOfMatches(n) {
  if (n == 2) {
    return 1;
  }
  if (n <= 2) {
    return 0;
  }

  const currentRoundMatchs = Math.floor(n / 2);
  const nextRoundTeams = n % 2 ? (n - 1) / 2 + 1 : n / 2;

  return currentRoundMatchs + numberOfMatches(nextRoundTeams);
}
