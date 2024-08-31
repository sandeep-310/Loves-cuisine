"use client"
import { useState } from 'react'
import classNames from 'classnames'
import styles from './StarRating.module.scss'

function StarRating({ value }) {
  const [rating, setRating] = useState(value)
  return (
    <div className={styles['star-rating']}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1
        return (
          <span
            key={index}
            data-value={ratingValue}
            className={classNames('fas', 'fa-star', styles.star, {
              [styles['marked']]: (rating) >= ratingValue
            })} 
          />
        )
      })}
    </div>
  )
}

export default StarRating
