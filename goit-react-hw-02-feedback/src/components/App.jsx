import React, { Component } from 'react';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import s from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  keys = Object.keys(this.state);

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((t, x) => t + x, 0);
  };

  countPositiveFeedbackPercentage = total => {
    if (!this.state.good) {
      return 0;
    }
    return Math.round((100 / total) * this.state.good);
  };

  click = event => {
    const name = event.target.name;
    this.setState({ [name]: this.state[name] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <section className={s.section}>
        <h1 className={s.visuallyHidden}>Feedback</h1>
        <div className={s.box}>
          <Section title="Please leave feedback">
            <FeedbackOptions options={this.keys} onLeaveFeedback={this.click} />
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
        </div>
      </section>
    );
  }
}
