export const getArgs = (args) => {
  const result = {};

  const [executor, file, ...otherArgs] = args;

  otherArgs.forEach((arg, index, array) => {
    if (arg.charAt(0) === '-') {
      const key = arg.substring(1);

      if (index === array.length - 1) {
        result[key] = true;
      }
      else if (array[index + 1].charAt(0) !== '-') {
        result[key] = array[index + 1];
      }
      else {
        result[key] = true;
      }
    }
  });

  return result;
};
