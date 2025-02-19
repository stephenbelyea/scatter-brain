import {defineField, defineType} from 'sanity'

export const listEntryType = defineType({
  name: 'listEntry',
  title: 'List Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'taskListId',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'personId',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'points',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'completed',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
