const inputValidation = (inp) =>{
  const err = {};
  const expRegText = new RegExp(/^[ a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ,.]+$/);

  if (!inp.title) {
    err.title = 'Title required.'
  }else{
    if (!expRegText.test(inp.title)) {
      err.title = 'Only letters and numbers are allowed.'
    }
  }

  if (!inp.summary) {
    err.summary = 'Summary required.'
  }else{
    if (!expRegText.test(inp.summary)) {
      err.title = 'Only letters and numbers are allowed.'
    }
  }

  if (inp.image) {
    const expRegUrl = new RegExp(/^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/);
    
    if (!expRegUrl.test(inp.image)) {
      err.image = 'Invalid url.'
    }
  }

  if (inp.healthScore) {
    if (!isNaN(inp.healthScore)) {
      if (inp.healthScore <= 0 | inp.healthScore > 100) {
        err.healthScore = 'Only numbers between 1 and 100.'
      }
    }else{
      err.healthScore = 'Only numbers between 1 and 100.'
    }
  }

  if (inp.time) {
    if (!isNaN(inp.time)) {
      if (inp.time <= 0 | inp.time > 100) {
        err.time = 'Only numbers between 1 and 100.'
      }
    }else{
      err.time = 'Only numbers between 1 and 100.'
    }
  }

  if(inp.ingredient) {
    if (!expRegText.test(inp.ingredient)) {
      err.ingredient = 'Only letters and numbers are allowed.'
    }
  }

  return err;
}

export default inputValidation;