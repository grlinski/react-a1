



function User(props) {
  // let name = 'Gabe';
  // let profession = 'Student';
  // let email = 'g@fakemail.com'
  
  return (
    <div className = {props.user}>
      <p>Name: {props.name}</p>
      <p>Profession: {props.profession}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

// {props.show ? "show" : "hide"}
// {props.logged ? "Logout" : "Login"}
export default User;