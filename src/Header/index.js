import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css'
import Interweave from 'interweave'

export default function Header({title, body}) {
  return <>
    <h1 className={styles.title}><Interweave content={title} /></h1>
    <p className={styles.description}>{body}</p>
  </>
}

Header.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  body: PropTypes.string
};
