interface Tituloprops {
  titulo: string;
  subtitulo: string
}

export default function Titulo(props: Tituloprops) {
  return (
    <div>
      <h1 className={`
        font-black text-3xl
        text-gray-900 dark:text-gray-100
      `}>
        {props.titulo}
      </h1>

      <h2 className={`
       font-medium text-sm
       dark:text-gray-300
      `}>
        {props.subtitulo}
      </h2>
    </div>
  )
}