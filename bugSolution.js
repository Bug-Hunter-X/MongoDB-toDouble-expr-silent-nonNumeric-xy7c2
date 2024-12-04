```javascript
const query = {
  $expr: {
    $gt: [
      {
        $cond: {
          if: { $type: "$price" },
          then: { $toDouble: "$price" },
          else: 0 //or null, default value
        }
      },
      100
    ]
  }
};

db.collection.find(query);
```