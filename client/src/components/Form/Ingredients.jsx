import style from './InputForm.module.css'
import BtnAdd from '../Button/BtnAdd'

export default function Ingredients({state, error, handleChange, addIngredient}) {
  return(
    <div className={style.formContainer}>
      <h3 className={style.formNote}>Add ingredients.</h3>
      <input type="text" placeholder="Ingredient name:" name="ingredient" value={state.ingredient} onChange={handleChange} />
      {error.ingredient && <p className={`errorMessage ${style.errorMessage}`}>{error.ingredient}</p>}
      <BtnAdd add={addIngredient}/>
      {state.ingredients.map((ing, index) => 
          <input type="text" value={ing.name} key={index} disabled/>
        )
      }
    </div>
  )
}