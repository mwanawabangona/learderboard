const listscore = [
  { name: 'john', score: 100 },
  { name: 'Blessed', score: 100 },
  { name: 'kalolo', score: 100 },
  { name: 'Jeff', score: 100 },
  { name: 'chimwemwe', score: 100 },
];

const displayScores = () => {
  const scoreBoardContainer = document.querySelector('#scores');
  scoreBoardContainer.innerHTML = '';
  listscore.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.name}: ${user.score}</p>
        </li>`;
  });
};

exports.displayScores = displayScores;