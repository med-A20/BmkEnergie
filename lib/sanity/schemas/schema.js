// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import home from './Content/home'
import about from './Content/about'
import portfolio from './Content/portfolio'
import skill from './Content/skill'
import experince from './Content/experince'
import job from './Content/job'
import testamonial from './Content/testamonial'
import contact from './Content/contact'
import socilMediaLinks from './Content/socilMediaLinks'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home, about, portfolio, skill, experince, job, testamonial, contact, socilMediaLinks
  ]),
})
