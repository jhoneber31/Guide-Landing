import { useEffect, useState } from 'react'
import '../DownloadProspectModal/index.scss'
import  checkIcon  from '../../assets/icons/checkIcon.svg'
import useFetchHook from '../../core/services/useFetchApi'

export function Register({
  selectedSchool = '',
  closeDownloadModal,
}: {
  selectedSchool: string, closeDownloadModal: () => void
}){
    const [formState, setFormState] = useState<{name: string | null, cellphone: string | null, school: string | null }>({
        name: null,
        cellphone: null,
        school: null,
    });
  const [shouldComplete, setShouldComplete] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);

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
  

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    if(name === 'cellphone'){
      value = value.replace(/\D/g, '').substring(0, 9);
    }
  
    setFormState({ ...formState, [name]: value });
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
        setIsFormVisible(false);
        setIsSuccess(true);
      }
    }catch (error){
      console.error('Error al enviar datos:', error);
    }
  }

  useEffect(() => {
    if (selectedSchool) {
      setFormState((prevState) => ({ ...prevState, school: selectedSchool }));
    }
  }, [selectedSchool]);

  return (
    <div className="modal" onClick={closeOnClickOutModal}>
      <div className="modal_container">
        { isFormVisible && (
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
                    <select
                    className="form_1_input form_1_input-select"
                    name="school"
                    value={formState.school ?? ''}
                    onChange={onChangeForm}
                    >
                        <option value=''>Seleccione una opción</option>
                        <option value="CITEN">CITEN</option>
                        <option value="EESTP_PNP">EESTP PNP</option>
                        <option value="EMCH">EMCH</option>
                        <option value="EO_FAP">EO FAP</option>
                        <option value="EO_PNP">EO PNP</option>
                        <option value="ESNA">ESNA</option>
                        <option value="ESOFA">ESOFA</option>
                        <option value="ETE">ETE</option>
                        <option value="IESTPFFAA">IESTPFFAA</option>
                    </select>
                    {
                      shouldComplete && !formState.school && <span className='alert'>Campo requerido*</span>
                    }
                    <button className='form_1_button' type='submit'>
                    {
                      fethData.isLoading ? 
                      <span className='loader'></span>: 'Enviar'
                    }
                    </button>
                </div>
          </form>
        )}
        {isSuccess && (
            <div className="success-message">
              <img src={checkIcon} alt="" />
              <span>¡Mensaje enviado con éxito!</span>
            </div>
        )}
      </div>
    </div>
  );
}