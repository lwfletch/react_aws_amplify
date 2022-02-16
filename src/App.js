import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import './App.css';
import { createQuestion } from './graphql/mutations'
import { getQuestion, listQuestions } from './graphql/queries'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    const questionsData = await API.graphql(graphqlOperation(listQuestions))
    let questions = questionsData.data.listQuestions.items
    console.log(questions)
    setQuestions(questions)
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello from AWS Amplify
        <h4>Developer: Trey Fletcher</h4>
          <ol>
            {questions.map((question, index) => (
              <li key={question.id}>{question.text}</li>
            ))}
          </ol>
      </header>
    </div>
  );
}

export default App;
