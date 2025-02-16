import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Scatter Brain',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as unknown as string,
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET as unknown as string,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
