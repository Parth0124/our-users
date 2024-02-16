const UserDetails = ({ selectedUser }) => {
    if (!selectedUser) {
      return <p className="alert alert-info">Select a user to view details</p>;
    }
  
    return (
      <div className='ml-10 mt-20 border border-light p-4'>
        <img src={selectedUser.avatar} alt="" className='img-fluid rounded-circle' style={{ width: '160px', height: '160px' }} />
        <div className='ml-6 mt-3'>
          <h2 className="text-primary mb-4 user-name">{selectedUser.profile.username}</h2>
          <p className="mb-2"><strong>Full Name: </strong> {selectedUser.profile.firstName} {selectedUser.profile.lastName}</p>
          <p className="mb-2"><strong>Email: </strong> {selectedUser.profile.email}</p>
          <p className="mb-0 "><strong>Job title: </strong>{selectedUser.jobTitle}</p>
        </div>
      </div>
    );
  };
  
export default UserDetails;
