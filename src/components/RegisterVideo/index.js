import React, { useState } from 'react'
import { Container } from './styles'
import { createClient } from '@supabase/supabase-js'

function useForm(props) {
  const [values, setValues] = useState(props.initialValues)
  return {
    values,
    handleChange: (event) => {
      const value = event.target.value
      const name = event.target.name
      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({})
    },
  }
}

const PROJECT_URL = 'https://vjvvhgwrjaxsimzsqeas.supabase.co'
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqdnZoZ3dyamF4c2ltenNxZWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2MjU2MDIsImV4cCI6MTk4NDIwMTYwMn0.NHSF7ELF7QM88D9hY10NyeVn6igGJOe1c5lN6EacSuM'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

// function getThumbnail(url) {
//   return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`
// }

// function getVideoId(url) {
//     const videoId = url.split("v=")[1];
//     const ampersandPosition = videoId.indexOf("&");
//     if (ampersandPosition !== -1) {
//         return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
// }

export default function RegisterVideo() {
  const registrationForm = useForm({
    initialValues: { title: '', url: '' },
  })
  const [visibleForm, setVisibleForm] = useState(false)

  return (
    <Container>
      <button className="add-video" onClick={() => setVisibleForm(true)}>
        +
      </button>

      {visibleForm ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()

            console.log(registrationForm.values)

            supabase
              .from('video')
              .insert({
                title: registrationForm.values.titulo,
                url: registrationForm.values.url,
                thumb: getThumbnail(registrationForm.values.url),
                playlist: 'jogos',
              })
              .then((oqueveio) => {
                console.log(oqueveio)
              })
              .catch((err) => {
                console.log(err)
              })

            setVisibleForm(false)
            registrationForm.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setVisibleForm(false)}
            >
              X
            </button>
            <input
              placeholder="Nome da Playlist"
              name="playlist"
              value={registrationForm.values.playlist}
              onChange={registrationForm.handleChange}
            />
            <input
              placeholder="Titulo do vídeo"
              name="title"
              value={registrationForm.values.title}
              onChange={registrationForm.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={registrationForm.values.url}
              onChange={registrationForm.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </Container>
  )
}
