# MongoDB $toDouble in $expr: Silent Failure with Non-Numeric Values

This repository demonstrates a subtle bug in MongoDB queries using the `$toDouble` operator within the `$expr` operator.  When the `$toDouble` operator encounters a non-numeric value, it silently returns `null`, leading to unexpected query results rather than throwing an error.

The issue is that this behavior is not immediately obvious and can lead to difficult-to-debug issues in applications relying on the query's correctness.

## Bug Description

The provided JavaScript code shows a query that uses `$toDouble` to convert the `price` field to a double before comparison. If `price` contains a string or other non-numeric value, the comparison will not behave as expected because `$toDouble` returns `null`, which is not explicitly handled in the comparison.

## Solution

The solution involves explicitly handling the potential `null` values returned by `$toDouble`. This can be done using the `$cond` operator to check for null values before the comparison.
