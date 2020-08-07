import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkItem.module.css'

export default function LinkItem({link, title, body}) {
  return <a href={link} role="listitem" className={styles.item} target="_">
    <h3>{title} <span>&rarr;</span></h3>
    <p >{body}</p>
  </a>
}

export const linkItemPropTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

LinkItem.propTypes = linkItemPropTypes
