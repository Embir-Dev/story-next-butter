import React from 'react';
import { action } from '@storybook/addon-actions';
import styles from '../pages/Home/Home.module.css'
import LinkItem from './index';

export default {
  component: LinkItem,
  title: 'LinkItem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const linkItemData = {
  link: "#",
  title: 'Example Link',
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const requiredStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export const Default = () => <div style={requiredStyles}>
  <LinkItem {...linkItemData} />
</div>
