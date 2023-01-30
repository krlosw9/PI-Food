import style from './Button.module.css'

export default function BtnSubmit({handler}) {
  return (
    <button className={style.button} onClick={handler}>
      Add recipe
    </button>
  )
}