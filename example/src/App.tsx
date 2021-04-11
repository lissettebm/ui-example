import React from 'react'
import { Button } from '@lissettebm/ui-example'
// Lo importo desde src porque este paquete es para probar
// y solo se actualiza el dist al hacer build
// no con start porque tiene un watch que no actualiza la carpeta scss en el dist
// ya que eso se hace manualmente
// en los proyectos se debería utilizar
// import '@lissettebm/ui-example/dist/scss/styles.scss'
import '@lissettebm/ui-example/src/assets/scss/styles.scss'

const App = () => {
  return (
    <div
      className='container'
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      <h4>Buttons</h4>
      <div className='row'>
        <div className='col-sm-6 col-md-4'>
          <Button
            text='Ingresar'
            colorType='primary'
            type='button'
            onClick={() => {}}
            size='lg'
          />
        </div>
      </div>
    </div>
  )
}

export default App
