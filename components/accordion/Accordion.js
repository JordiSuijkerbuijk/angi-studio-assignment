import {useState} from 'react'
import clsx from 'clsx'

import Icon from '../icon/Icon'

import style from './accordion.module.scss'

export default function Accordion({title, items}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx([style.accordion, open && style.open])} onClick={() => setOpen(v => !v)}>
      <div className={style.title}>
        {title}
        <Icon iconTitle='arrow_down' />
      </div>
      <div className={style.wrapper}>
        {items.map((item, key) => (
          <div key={key} className={style.accordionItem}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}
