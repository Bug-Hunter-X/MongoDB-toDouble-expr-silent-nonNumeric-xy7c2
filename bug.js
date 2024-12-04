```javascript
const query = { $expr: { $gt: [ { $toDouble: '$price' }, 100 ] } };
//This query attempts to convert the 'price' field to a double using $toDouble before comparing it to 100. However, if the 'price' field contains a non-numeric value (such as a string), the $toDouble operator will return null, and the comparison will result in an unexpected outcome.

db.collection.find(query);
```