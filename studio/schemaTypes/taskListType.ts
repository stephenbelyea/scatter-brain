import {defineField, defineType} from 'sanity'

export const taskListType = defineType({
  name: 'taskList',
  title: 'Task List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'people',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'repeats',
      type: 'string',
      options: {
        list: [
          {title: 'Every day', value: 'daily'},
          {title: 'Weekdays only', value: 'weekday'},
          {title: 'Weekends only', value: 'weekend'},
          {title: 'Weekly', value: 'weekly'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timeframe',
      type: 'string',
      options: {
        list: [
          {title: 'Mornings', value: 'morning'},
          {title: 'Before school', value: 'beforeSchool'},
          {title: 'After school', value: 'afterSchool'},
          {title: 'Evenings', value: 'evening'},
          {title: 'Bedtime', value: 'bedtime'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'taskItems',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'taskItem'}]}],
      validation: (rule) => rule.required(),
    }),
  ],
})
