import styles from './SpecialDish.module.scss'

function SpecialDish({ title, subtitle, description, img }) {
  return (
    <div className={styles['special-dish']}>
      <div className={styles['special-dish__content']}>
        <span className={styles['special-dish__subtitle']}>{subtitle}</span>
        <h3 className={styles['special-dish__title']}>{title}</h3>
        <p className={styles['special-dish__description']}>{description}</p>
        <a href='#' className='button'>
          explore complete menu
        </a>
      </div>
      <div className={styles['special-dish__image']}>
        <img src={img} alt={title} />
      </div>
    </div>
  )
}

export default SpecialDish
