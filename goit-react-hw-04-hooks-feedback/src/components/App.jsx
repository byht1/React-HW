import React, { useState } from 'react';
import Notification from './Feedback/Notification/Notification';
import Statistics from './Feedback/Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Section from './Feedback/Section/Section';
import { TitleVH, DivBox, SectionBox } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countPositiveFeedbackPercentage(total) {
    if (!good) {
      return 0;
    }

    return Math.round((100 / total) * good);
  }

  function click(event) {
    const name = event.target.name;
    if (name === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (name === 'bad') {
      setBad(prevState => prevState + 1);
    }
  }

  const keys = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;
  const positivePercentage = countPositiveFeedbackPercentage(total);
  return (
    <SectionBox>
      <TitleVH>Feedback</TitleVH>
      <DivBox>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={click} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </DivBox>
    </SectionBox>
  );
}
