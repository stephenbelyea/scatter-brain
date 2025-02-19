import {defineField, defineType} from 'sanity'

export const taskItemType = defineType({
  name: 'taskItem',
  title: 'Task Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'points',
      type: 'number',
      validation: (rule) => rule.min(0),
      initialValue: 1,
    }),
  ],
})
