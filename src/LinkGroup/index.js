import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkGroup.module.css'
import LinkItem, { linkItemPropTypes } from '@/src/LinkItem'

export default function LinkGroup({data}) {
  return <div role="list" className={styles.grid}>
    {data.map((d, i) => <LinkItem key={d.title+i} {...d} />)}
  </div>
}

LinkGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(linkItemPropTypes))
};
