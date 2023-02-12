const getArgv = (args) => {
  const [path, filename, ...otherArgs] = args;
  const res = {};
  otherArgs.forEach((value, index, array) => {
    if (value.charAt(0) === '-') {
      if (index === array.length - 1) {
        res[value.substring(1)] = true;
      } else {
        if (array[index + 1].charAt(0) === '-') {
          res[value.substring(1)] = true;
        } else {
          res[value.substring(1)] = array[index + 1];
        }
      }
    }
  });
  return res;
};
export default getArgv;
