import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from './index';

export default {
  component: Header,
  title: 'Header',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const headerData = {
  title: 'Example Title',
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

export const withHeaderLinkData = {
  ...headerData, title: <a href="#">Example Link Title</a>
};

export const Default = () => <Header {...headerData} />;

export const withHeaderLink = () => <Header {...withHeaderLinkData} />;
