import Hero from './Contact/Hero'
import Form_Body from './Contact/Form_Container'

const Contact = () => {
  return (
    <div className="App flex flex-col gap-16 font-my_font h-fit">
      <Hero />
      <Form_Body />
    </div>
  )
}

export default Contact