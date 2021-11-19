import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer Name
  name: 'hero',
  // Visible title
  title: 'Home Page Hero',
  type: 'document',
  icon,

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Team Member',
    },
    {
      name: 'secondTitle',
      title: 'Second Title',
      type: 'string',
      description: 'Second Title',
    },
    {
      name: 'strongTitle',
      title: 'Bold Title',
      type: 'string',
      description: 'Bold Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 200,
      },
    },
    {
      name: 'description',
      title: 'description',
      type: 'text',
      description: 'Tell us a bit about this Athlete',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
