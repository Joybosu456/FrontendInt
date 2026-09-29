import { javascriptQuestions } from './javascriptQuestions.js'
import { reactQuestions } from './reactQuestions.js'
import { htmlQuestions } from './htmlQuestions.js'
import { cssQuestions } from './cssQuestions.js'
import { machineCodingQuestions } from './machineCodingQuestions.js'
import { reduxQuestions } from './reduxQuestions.js'

export const interviewTopics = [
  {
    id: 'javascript',
    name: 'JavaScript',
    shortName: 'JS',
    color: 'yellow',
    description: 'The language that brings the web to life.',
    level: 'Core skills',
    questions: javascriptQuestions,
  },
  {
    id: 'react',
    name: 'React.js',
    shortName: 'Re',
    color: 'blue',
    description: 'Build interfaces from small, reusable pieces.',
    level: 'Frontend library',
    questions: reactQuestions,
  },
  {
    id: 'html',
    name: 'HTML',
    shortName: 'H',
    color: 'orange',
    description: 'Structure content with meaning and accessibility.',
    level: 'Web foundations',
    questions: htmlQuestions,
  },
  {
    id: 'css',
    name: 'CSS',
    shortName: 'C',
    color: 'purple',
    description: 'Create clear, adaptable layouts and visual systems.',
    level: 'Visual craft',
    questions: cssQuestions,
  },
  {
    id: 'machine-coding',
    name: 'Machine Coding',
    shortName: 'MC',
    color: 'custom',
    description: 'Practice practical UI components and everyday JavaScript patterns.',
    level: 'Practical exercises',
    questions: machineCodingQuestions,
  },
  {
    id: 'redux',
    name: 'Redux',
    shortName: 'Rx',
    color: 'purple',
    description: 'Manage shared application state with predictable Redux Toolkit patterns.',
    level: 'State management',
    questions: reduxQuestions,
  },
]

export const interviewTips = [
  { number: '01', title: 'Think out loud', text: 'Share how you approach a problem before jumping to the answer. Your reasoning is part of the conversation.', color: 'green' },
  { number: '02', title: 'Use a real example', text: 'Connect concepts to something you have built, fixed, or learned. Specifics make your answer memorable.', color: 'coral' },
  { number: '03', title: 'Clarify the question', text: 'A thoughtful follow-up question shows curiosity and helps you answer the problem that was actually asked.', color: 'blue' },
]