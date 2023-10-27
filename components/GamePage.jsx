const React = require('react');
const Layout = require('./Layout');
function GamePage({title, question}){
    if(!question){
        return <Layout>
            Квиз окончен, всем пока
        </Layout>
    }
    return (
        <Layout><div className='container p-2' id = "game">
     <h1 className="display-6">{question.question}</h1>
     {question.question_img && (<img src={question.question_img} />)}
     <form id="answerForm" data-questionId={question.id}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Ваш ответ</label>
    <input type="text" name="answer" className="form-control" id="exampleInputEmail1" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div id="result"> </div>
     </div> </Layout>
    )
}
module.exports = GamePage

