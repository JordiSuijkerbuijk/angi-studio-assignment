import style from './input.module.scss'

export default function Input({ placeholder = '', onChange }) {
  return (
    <input className={style.input} type='text' placeholder={placeholder} onChange={onChange} />
  )
}
