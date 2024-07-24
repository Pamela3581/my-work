const arr = [
    {a: '1', b: '2'},
    {a: '3', b: '4'},
    {a: '5', b: '6'}
  ];
  
  const reduced = arr.reduce((acc, curr) => {
    for (const key in curr) {
      if (acc[key]) {
        acc[key] += `,${curr[key]}`;
      } else {
        acc[key] = curr[key];
      }
    }
    return acc;
  }, {});
  console.log(reduced);

  const act = [1, 2, 3, 4]
  const final = []

   console.log([
    act[0] + 5,
    act[1] + 5,
    act[2] + 5,
    act[3] + 5
   ])

for(let i = 0; i < act.length; i++){
  final.push(arr[i] + 5)
  console.log(final)

}
console.log(final)

const every = act.some((val)=>{
  return val > 3
})
console.log(every)




  