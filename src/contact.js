import React from 'react';

const ContactInfo = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  };

  const labelStyle = {
    margin: '10px 0',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      <p>
        <strong>Mobile No: </strong> 9390611899 <br />
        <strong>Email Address: </strong> suggamrajkumar1308@gmail.com <br />
      </p>
      <form style={formStyle}>
        <label style={labelStyle} htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" /><br />
        <label style={labelStyle} htmlFor="dob">DOB</label>
        <input type="date" id="dob" name="dob" /><br />
        <label style={labelStyle}>Do you want to sign up to the email list?</label>
        <input style={{ margin: '10px 0' }} type="checkbox" id="signup" name="signup" />
        <br />
        <input style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }} type="submit" value="Submit" />
      </form>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ContactInfo;
