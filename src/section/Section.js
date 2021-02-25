import React from 'react'
import styles from "./Section.module.css";
import PropTypes from 'prop-types'


const Section = ({title}) => {
    return (
        <section className={styles.feedback}>
            <h2>{title}</h2>            
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,    
}

export default Section;