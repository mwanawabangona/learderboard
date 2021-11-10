const scores = document.querySelector('.scores');
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const idLink = 'ZG4e5rNu9Z6ULpiE5pjN/';

let scoresArr = [];

const gameScores = async () => {
  const response = await fetch(`${apiEndPoint}${idLink}scores/`)
    .then((res) => res.json())
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

const displayScoreList = () => {
  gameScores().then((res) => {
    if (typeof res === 'object') {
      scoresArr = Array.from(res);
      scores.innerHTML = '';
      if (scoresArr.length > 0) {
        scoresArr.forEach((score) => {
          const scoresTemp = `<li><p>${score.user}: ${score.score}</p></li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};

const addScore = async (data) => {
  await fetch(`${apiEndPoint}${idLink}scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.displayScoreList = displayScoreList;
exports.gameScores = gameScores;
exports.addScore = addScore;

// const listscore = [
//   { name: 'john', score: 100 },
//   { name: 'Blessed', score: 100 },
//   { name: 'kalolo', score: 100 },
//   { name: 'Jeff', score: 100 },
//   { name: 'chimwemwe', score: 100 },
// ];

// const displayScores = () => {
//   const scoreBoardContainer = document.querySelector('#scores');
//   scoreBoardContainer.innerHTML = '';
//   listscore.forEach((user) => {
//     scoreBoardContainer.innerHTML += `<li>
//         <p>${user.name}: ${user.score}</p>
//         </li>`;
//   });
// };

// exports.displayScores = displayScores;