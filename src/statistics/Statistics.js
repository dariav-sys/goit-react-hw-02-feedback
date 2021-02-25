import React from "react";
import PropTypes from "prop-types";
import Notification from "./notification/Notification.js";

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercent }) => {
  return total > 0 ? (
    <>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbackPercent}%</p>
    </>
  ) : (
    <Notification message="No feedback yet to report..." />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercent: PropTypes.number.isRequired,
};

export default Statistics;
