// UserDetails.js
const UserDetails = ({ selectedUser }) => {
    // Check if selectedUser is null
    if (!selectedUser) {
      return <p className="alert alert-info">Select a user to view details</p>;
    }
  
    return (
      <div className='ml-10 mt-20 border border-light p-4'>
        <img src={selectedUser.avatar} alt="" className='img-fluid rounded-circle' style={{ width: '160px', height: '160px' }} />
        <div className='ml-6 mt-3'>
          <h2 className="text-primary">{selectedUser.profile.username}</h2>
          <p>Full Name: {selectedUser.profile.firstName} {selectedUser.profile.lastName}</p>
          <p>Email: {selectedUser.profile.email}</p>
          <p>Job Title: {selectedUser.jobTitle}</p>
        </div>
      </div>
    );
  };
  
export default UserDetails;
