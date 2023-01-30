import style from './InputForm.module.css'

export default function BasicInfo({state, error, handleChange}) {
  return(
    <div className={style.formContainer}>
      <h3 className={style.formNote}>Fields with * are required.</h3>
      <input type="text" placeholder="Title(*):" name="title" value={state.title} onChange={handleChange} />
      {error.title && <p className={`errorMessage ${style.errorMessage}`}>{error.title}</p>}
      <input type="text" placeholder="Image: (Url)" name="image" value={state.image} onChange={handleChange} />
      {error.image && <p className={`errorMessage ${style.errorMessage}`}>{error.image}</p>}
      <input type="number" placeholder="Health Score: (min: 1 - max: 100)" name="healthScore" value={state.healthScore} onChange={handleChange} />
      {error.healthScore && <p className={`errorMessage ${style.errorMessage}`}>{error.healthScore}</p>}
      <input type="number" placeholder="Time: (min: 1 - max: 100)" name="time" value={state.time} onChange={handleChange} />
      {error.time && <p className={`errorMessage ${style.errorMessage}`}>{error.time}</p>}
      <textarea placeholder="Summary(*): (max: 100 letters)" name="summary" value={state.summary} onChange={handleChange} cols="30" rows="10"></textarea>
      {error.summary && <p className={`errorMessage ${style.errorMessage}`}>{error.summary}</p>}
    </div>
  )
}