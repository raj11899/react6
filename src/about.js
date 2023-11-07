import React from "react";

function Portfolio() {
  const portfolioStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const listStyle = {
    textAlign: "left",
  };

  return (
    <div style={portfolioStyle}>
      <p>
        I'm a nice fun and friendly person, I'm honest and punctual, I work well
        in a team but also on my own as I like to set myself goals which I will
        achieve, I have good listening and communication skills. I have a
        creative mind and am always up for new challenges.
      </p>
      <hr style={{ width: "50%", margin: "20px auto" }} />
      <h3>Skills</h3>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={listStyle}>
              <ul>
                <li>Web Development</li>
                <li>Programming in C</li>
                <li>Programming in Java</li>
                <li>vedio editing</li>
                <li>Fast Typing</li>
              </ul>
            </td>
            <td style={listStyle}>
              <ul>
                <li>⭐⭐⭐⭐</li>
                <li>⭐⭐⭐⭐</li>
                <li>⭐⭐⭐⭐⭐</li>
                <li>⭐⭐⭐</li>
                <li>⭐⭐⭐⭐</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Hobbies</h3>
      <ol style={listStyle} type="i">
        <li>Watching Movies</li>
        <li>Chess</li>
        <li>Coding</li>
        <li>cricket</li>
      </ol>
      <h3>Education</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>Good Shepherd English Medium High School</td>
          </tr>
          <tr>
            <td>2020-2021</td>
            <td>Nucleus Junior College</td>
          </tr>
          <tr>
            <td>Present</td>
            <td>VIT-AP University</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Portfolio;
