import './Landing.css'

const Landing = ({ user }) => {
  return (
    <>
    {/* <main 
    className='container'>
      <h1>Hey {user ? user.name : 'friend'}! </h1>
    </main> */}
    <img 
    src="../lavndr_text.png"
    alt="The Lavndr Text Logo in Cursive"
    className='cursive_logo'
    />
    </>
  )
}

export default Landing
