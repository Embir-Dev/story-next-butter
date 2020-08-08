import React from 'react';
import LinkItem from './index';

export default {
  component: LinkItem,
  title: 'LinkItem',
  excludeStories: /.*Data$/,
  decorators: [story => <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>{story()}</div>]
};

export const linkItemData = {
  link: "#",
  title: "Example Link",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

export const Default = () => <LinkItem {...linkItemData} />
