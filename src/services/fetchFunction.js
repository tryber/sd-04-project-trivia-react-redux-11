export const fetchToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request').then((response) =>
    response.json().then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    }),
  );

export const fetchTrivia = (token) =>
  fetch(`https://opentdb.com/api.php?amount=5&token=${token}`).then(
    (response) =>
      response.json().then((json) => {
        if (response.ok) return Promise.resolve(json);
        return Promise.reject(json);
      }),
  );
