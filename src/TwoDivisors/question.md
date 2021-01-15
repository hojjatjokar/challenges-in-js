# Two Divisors

You are given an integer `N`. You have to find how many numbers `X` exist for
the given `N` such that `1 <= x <= N` and the number of divisors of `X` is a
power of 2.

## Input format

- First line Q (number of queries)
- Next Line: Q space-sparated integer such that the i^th integer is N for the
  i^th query

## Output format

Print a single integer denoting the number of valid `1 <= x <=N for each query
as space-separated

## Constraints

- 1 <= Q <= 10 ^ 6
- 1 <= N <= 10 ^ 6

## sample input 1

```
3
1 2 3
```

### smaple input 1

```
1 2 3
```

## Explanation

For N = 3

Number of divisors of 1 = 1 (can be represented as 2 ^ 0) Number of divisors of
2 = 1 (can be represented as 2 ^ 1) Number of divisors of 1 = 1 (can be
represented as 2 ^ 1)

Therefore, the total count of valid
