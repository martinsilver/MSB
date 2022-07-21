import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import api from './services/api';
import './styles/App.css';


function App() {
  const [file, setFile] = useState<File>();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    telefone: '',
    mensagem: '',
  })


  const fileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files?.length) {
      if (event.target.files[0].size > 500 * 1024) {
        alert('File size exceeded');
        event.target.value = '';
      }
      const fileTran: File = event.target.files[0];
      setFile(fileTran)
    }
  }

  const inputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

  }
  const formChange: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = new FormData();
    const newFile = file as Blob;
    data.append('file', newFile);
    data.append('name', formValues.name);
    data.append('email', formValues.email);
    data.append('telefone', formValues.telefone);
    data.append('mensagem', formValues.mensagem);
    api.post('upload', data)
  }

  return (
    <div className='App'>

      <form onSubmit={formChange} className='App-header'>

        <label htmlFor="name">
          Name
          <input placeholder='Name' value={formValues.name} name='name' id='name' onChange={inputChange} type='text' />
        </label>

        <label htmlFor="email">
          Email
          <input placeholder='Email' value={formValues.email} name='email' id='email' onChange={inputChange} type='text' />
        </label>

        <label htmlFor='telefone'>
          Telefone
          <input placeholder='Telefone' value={formValues.telefone} name='telefone' id='telefone' onChange={inputChange} type='text' />
        </label>

        <label htmlFor='mensagem'>
          Mensagem
          <input placeholder='Mensagem' value={formValues.mensagem} name='mensagem' id='mensagem' onChange={inputChange} type='text' />
        </label>

        <label htmlFor='file'>
          {'Arquivo máximo de 500kB '}
          <input type='file' name='file' id='file' onChange={fileChange} accept='.pdf, .doc, .docx, .odt, .txt' />
        </label>

        <button type='submit'>submit</button>

      </form>
    </div>
  );
}

export default App;
