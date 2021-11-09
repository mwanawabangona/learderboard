const listscore = [
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
  { name: '', score: 100 },
];

const lists = (list, containerlist) => {
  let scoreBoardContainer = '';
  list.forEach((element) => {
    const { name, score } = element;
    scoreBoardContainer += `<li>
      <p>${name} :${score}</p>
      </li>`;
  });

  containerlist.innerHTML = scoreBoardContainer;
};

export { listscore, lists };