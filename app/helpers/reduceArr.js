export function reduceArr(props) {
  const { limitInf, limitSup, arr } = props;
  
  return arr.slice(limitInf, limitSup);
}
