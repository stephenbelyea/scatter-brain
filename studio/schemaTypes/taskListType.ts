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
      name: 'active',
      type: 'boolean',
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
          {title: 'Weekly on Saturday', value: 'saturday'},
          {title: 'Weekly on Sunday', value: 'sunday'},
          {title: 'Weekly on Monday', value: 'monday'},
          {title: 'Weekly on Tuesday', value: 'tuesday'},
          {title: 'Weekly on Wednesday', value: 'wednesday'},
          {title: 'Weekly on Thursday', value: 'thursday'},
          {title: 'Weekly on Friday', value: 'friday'},
          {title: "All weekend (tasks don't repeat)", value: 'allWeekend'},
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
          {title: 'All Day', value: 'allDay'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'taskItems',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'taskItem'}]}],
    }),
  ],
})
