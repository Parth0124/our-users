// About.js
const openGitHubProfile = () => {
    window.open('https://github.com/Parth0124', '_blank');
  };
  
  const About = () => {
    return (
      <div className="container py-4">
        <h1 className="display-4">User Management System</h1>
        <p className="lead">This is a web page that displays the list of the users and the details associated with the respective users.</p>
        <p className="lead">Version 1.0.0</p>
        {/* Attach onClick event to the name to open GitHub profile */}
        <p className="lead" style={{ cursor: 'pointer' }} onClick={openGitHubProfile}>Made by <strong>Parth Abhang</strong></p>
      </div>
    );
  };
  
  export default About;
  