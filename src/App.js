import React, { Component } from 'react';
import Section from './components/section/Section.js';
import Statistics from './components/statistics/Statistics.js';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const feedbackValue = event.target.name;
    this.setState(prevState => {
      return {
        [feedbackValue]: prevState[feedbackValue] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }

  positiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please provide your feedback :)">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFeedbackPercent={this.positiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
