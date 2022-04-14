import { useParams, Link } from 'react-router-dom'

const DeleteProfile = (props) => {
  const { id } = useParams()

  const handleDelete = () => {
    props.deleteProfile && props.deleteProfile(id)
  }

  return ( <>
    <h2>Are you sure you want to delete your profile?</h2>
    <Link to >
      <button>No, I'll keep it for now</button>
    </Link>
      <button className="delete-btn" onClick={handleDelete}>Yes I would like to delete my profile</button>
  </> );
}
 
export default DeleteProfile;