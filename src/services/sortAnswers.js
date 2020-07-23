const sortAnswers = (array) => {
  console.log('sort');
  return array.sort(() => Math.random() - 0.5);
};

export default sortAnswers;
