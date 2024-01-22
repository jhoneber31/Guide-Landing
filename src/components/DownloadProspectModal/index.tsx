import { useEffect, useState } from 'react'
import './index.scss'
import useFetchHook from 'core/services/useFetchApi'

export function DownloadProspectModal({
  selectedSchool = '',
  closeDownloadModal,
}: {
  selectedSchool: string, closeDownloadModal: () => void
}){
  const [formState, setFormState] = useState<{name: string | null, cellphone: string | null, school: string | null }>({
    name: null,
    cellphone: null,
    school: null,
  })
  const [shouldComplete, setShouldComplete] = useState<boolean>(false)

  const fethData = useFetchHook(formState);
  const validIsCompletedForm = () => {
    if (
      !formState.name ||
      !formState.cellphone ||
      formState.cellphone.length !== 9 || 
      !/^\d+$/.test(formState.cellphone) || 
      !formState.school ||
      formState.school === ''
    ) {
      setShouldComplete(true);
      return false;
    }
    return true;
  };

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    if(name === 'cellphone'){
      value = value.replace(/\D/g, '').substring(0, 9);
    }
    

    setFormState({ ...formState, [name]: value })
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevenir la entrada si no es un número
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  }

  const closeOnClickOutModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.classList.contains('modal')) {
      closeDownloadModal();
    }
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if(!validIsCompletedForm()) return;
    try {
      await fethData.sendDataToApi();
      if (!fethData.isLoading) {
        const root: any = document.querySelector('#root');
        const a = document.createElement('a');
        const filename = `Temario_${formState.school?.replace(/\s/g, '_')}`;
        const url = `pdf/${filename}.pdf`
        a.href = url;
        a.download = filename;
        a.target="_blank"
        root.appendChild(a);
        a.click()
        root.removeChild(a);
      }
    } catch (error) {
      // Maneja el error aquí si es necesario
      console.error('Error al enviar datos:', error);
    }
    closeDownloadModal();
  }

  useEffect(() => {
    if(selectedSchool){
      setFormState({ ...formState, school: selectedSchool })
    }
  }, [selectedSchool])

  return (
    <div className="modal" onClick={closeOnClickOutModal}>
      <div className="modal_container">
        <form className='form' onSubmit={handleOnSubmit}>
          <div className='form_1'>
            <div className='modal_header'>
              <button className='modal_close' type='button' onClick={() => closeDownloadModal()}>x</button>
            </div>
            <h3 className='form_1_title'>Por favor, llena el siguiente formulario.</h3>
            <label className='form_1_label'>Nombres y apellidos </label>
            <input className='form_1_input' name='name' onChange={onChangeForm}/>
            {
              shouldComplete && !formState.name && <span  className="alert" role="alert">Campo requerido*</span>
            }
            <label className='form_1_label'>Celular</label>
            <input className='form_1_input' name='cellphone' onChange={onChangeForm} onKeyPress={onKeyPress} type='text' pattern='\d{1,9}' maxLength={9} inputMode="numeric" />
            {
              shouldComplete && !formState.cellphone && <span className='alert'>Campo requerido*</span>
            }
            {
              shouldComplete && formState.cellphone && formState.cellphone.length !== 9 && <span className='alert'>Número inválido (debe tener 9 dígitos)*</span>
            }
            <label className='form_1_label'>Escuela de interés</label>
            <input className='form_1_input' value={selectedSchool} readOnly name='school' onChange={onChangeForm}></input>
            <button className='form_1_button' type='submit'>
              {
                fethData.isLoading ? 
                <span className='loader'></span>: 'Descargar temario'
              }        
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}