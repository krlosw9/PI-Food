import style from './InputForm.module.css'

export default function CheckboxDishType({dishTypes, handleChange, isChecked}) {
  return (
    <div className={style.formContainer}>
      <div className={style.checkboxContainer}>
        <h3>Choose dish types:</h3>
        {dishTypes.map(dt => (
          <div key={dt.id}>
            <input
              type="checkbox"
              id={`check-${dt.id}`}
              className={style.checkbox}
              onChange={() => handleChange(dt.id)}
              defaultChecked={isChecked(dt.id)}//Includes retorna true o false
            />
            <label htmlFor={`check-${dt.id}`}>
              {dt.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}