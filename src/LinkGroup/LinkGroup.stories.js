import React from 'react';
import LinkGroup from './index';
import { linkItemData } from '@/src/LinkItem/LinkItem.stories'

export default {
  component: LinkGroup,
  title: 'LinkGroup',
  excludeStories: /.*Data$/,
  decorators: [story => <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>{story()}</div>]
};

export const linkGroupData = [
  {...linkItemData, title: "Example 1"},
  {...linkItemData, title: "Example 2"},
  {...linkItemData, title: "Example 3", body: "Short Text"},
  {...linkItemData, title: "Example 4"}
];

export const Default = () => <LinkGroup data={linkGroupData} />
