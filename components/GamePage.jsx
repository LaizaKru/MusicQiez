
const React = require('react');
const Layout = require('./Layout');

function GamePage({ title, question }) {
  if (!question) {
    return (
      <Layout>
        <div className="frame">
          <div className="center">
            <div className="carousel">
              <div className="pre">Спасибо </div>
              <div className="change_outer">
                <div className="change_inner">
                  <div className="element">За игру!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div
        className="container p-2 d-flex justify-content-center flex-column "
        id="game"
      >
        <h1
          className="display-6 "
          style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}
        >
          {question.question}
        </h1>
        {question.question_img && <img src={question.question_img} />}
        <audio
          controls
          key={question.id}
          style={{ marginLeft: '30%', width: '500px' }}
        >
          <source src={question.url} />
        </audio>
        <form id="answerForm" data-questionId={question.id}>
          <div className="mb-3 text-white">
            <label
              for="exampleInputEmail1"
              className="form-label "
              style={{ marginLeft: '43%', width: '200px' }}
            >
              Ваш ответ
            </label>
            <input
              style={{ marginLeft: '43%', width: '200px' }}
              type="text"
              name="answer"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ marginLeft: '43%', width: '200px' }}
          >
            Submit
          </button>
        </form>
        <div id="result"> </div>
      </div>{' '}
    </Layout>
  );
}
module.exports = GamePage;
