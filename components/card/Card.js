import Image from 'next/image'

import Icon from '../../components/icon/Icon'

import style from './card.module.scss'

export default function Card({ image, title, description, link, linkTitle = 'Read more' }) {
  return (
    <div className={style.card}> 
      <div className={style.image}>
        <Image src={image} alt={title} layout="responsive"/>
      </div>
      <div className={style.content}>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.description}>
          {description}
        </div>
        <a className={style.link} href={link}>
          {linkTitle}
          <div className={style.icon}>
            <Icon iconTitle='arrow_right' />
          </div>
        </a>
      </div>
    </div>
  )
}
