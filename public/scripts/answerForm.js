const form = document.getElementById("answerForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answer = formData.get("answer");
    console.log(answer);
    const question = e.currentTarget.dataset.questionid;
    console.log(e.currentTarget.dataset);
    fetch(`/question/${question}/check`, {
      method: "POST",
      body: JSON.stringify({ answer }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          // у респонса есть поле окей, если условие выполниться.
          throw new Error("message");
        }
        return response.json();
      })
      .then((data) => {
        const resultEl = document.createElement("div");
        const serchParams = new URLSearchParams(window.location.search); // создали экзмепляр класс урл серчпарамс, это в адресной строке вопросик. Нам нужен единственный параметр. Вытщаим с помощью гета цифррку
        const currentIndex = serchParams.get("questionIndex");
        const themeId = serchParams.get("themeId");
        const href = `/game?themeId=${themeId}&questionIndex=${
          parseInt(currentIndex) + 1
        }`;
        const link = `<a href='${href}' className="btn btn-danger mb-2" style={{background:"#a44e6b", borderColor:"#a44e6b"}}><h2>Cледующий вопрос</h2></a> `;
        if (data.correct) {
          resultEl.innerHTML = `Правильный ответ! Ваш счет: ${data.score} ${link}`;
        } else {
          resultEl.innerHTML = `Неправильный ответ! Хи-Хи ${link}`;
        }
        const result = document.getElementById("result");
        if (result.firstChild) {
          result.removeChild(result.firstChild);
        }
        result.appendChild(resultEl);
      });
  });
}
