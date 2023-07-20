// filename is includes/docs.js

const columns = {
    user_id: `A unique identifier for a user`,
    age: `The age of a user`,
    creation_date: `The date this user signed up`,
    user_tenure: `The number of years since the user's creation date`,
    badge_count: `The all-time number of badges the user has received`,
    questions_and_answer_count: `The all-time number of questions and answers the user has created`,
    question_count: `The all-time number of questions the user has created`,
    answer_count: `The all-time number of answers the user has created`,
    last_badge_received_at: `The time the user received their most recent badge`,
    last_posted_at: `The time the user last posted a question or answer`,
    last_question_posted_at: `The time the user last posted an answer`,
    last_answer_posted_at: `The time the user last posted a question`,
}


module.exports = {
  columns
};