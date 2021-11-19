import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer Name
  name: 'info',
  // Visible title
  title: 'Info',
  type: 'document',
  icon,

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Information',
    },
    {
      name: 'infobutton',
      title: 'Info Button',
      type: 'string',
      description: 'Info text',
    },
    {
      name: 'infoscroll',
      title: 'Scroll Button',
      type: 'string',
      description: 'Scroll text',
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
      description: 'Information Text',
    },
  ],
};
