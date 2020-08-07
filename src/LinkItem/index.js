import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkItem.module.css'

export default function LinkItem({link, title, body}) {
  return <a href={link} role="listitem" className={styles.item}>
    <h3>{title} <span>&rarr;</span></h3>
    <p >{body}</p>
  </a>
}

LinkItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};
