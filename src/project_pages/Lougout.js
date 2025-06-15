import { getAuth, deleteUser } from "firebase/auth";

function Logout() {

  const handleDeleteUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          alert('User deleted successfully');
        })
        .catch((error) => {
          alert('Error deleting user:', error);
        });
    } else {
      alert('No user is currently signed in.');
    }
  };

  return (
    <div style={{ textAlign: "center",marginTop: "10%" }}>
      <h1>Welcome</h1>
      <button style={{ border: "1px soild blue", color: "white", backgroundColor: "blue", padding: "10px", margin: "10px" }} onClick={() => {
        alert("You want to Logout..")
      }}>
        Logout
      </button>
      <button style={{ border: "1px soild blue", color: "white", backgroundColor: "blue", padding: "10px" }} onClick={() => {
        handleDeleteUser()
      }}>
        Logout and Delete Account
      </button>
    </div>
  )
}

export default Logout;