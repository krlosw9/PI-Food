import style from './InputForm.module.css'
import BtnAdd from '../Button/BtnAdd'

export default function Instructions({state, error, handleChange, addInstruction}) {
  return(
    <div className={style.formContainer}>
      <h3 className={style.formNote}>Add instructions.</h3>
      <input type="text" placeholder="Instruction:" name="instruction" value={state.instruction} onChange={handleChange} />
      {error.instruction && <p className={`errorMessage ${style.errorMessage}`}>{error.instruction}</p>}
      <BtnAdd add={addInstruction}/>
      {state.instructions.map((ins, index) => 
          <input type="text" value={ins.name} key={index} disabled/>
        )
      }
    </div>
  )
}