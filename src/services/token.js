const fecthToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request').then((response) =>
    response.json().then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    }),
  );

export default fecthToken;
