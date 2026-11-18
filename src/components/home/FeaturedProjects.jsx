import React from "react";

const FeaturedProjects = () => {
  return (
    <>
      <h2>Featured Projects</h2>
      {/*First Project*/}
      <section>
        <h3>Buildie</h3>
        <p>
          Developed using React.js, Redux Toolkit, Node.js, Express.js, and
          MongoDB, it transforms practical civil engineering requirements into a
          digital solution with automated calculations and cost visualization.
        </p>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>REST APIs</li>
          <li>Redux Toolkit</li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://buildieapp.vercel.app/login"
        >
          Explore Buildie
        </a>
        <p>
          New to Buildie? Register to create your account and explore the
          application.
        </p>
      </section>
      {/*Second Project*/}
      <section>
        <h3>Java Employee Management System</h3>
        <p>
          A desktop application built using Java Swing and MySQL to manage
          employee records.
        </p>
        <ul>
          <li>Java</li>
          <li>Java Swing</li>
          <li>MySQL</li>
          <li>JDBC</li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Subhadeep0707/Java-Employee-Management-System"
        >
          View Source Code
        </a>
      </section>
      {/*Third Project*/}
      <section>
        <h3>Firebase CRUD App</h3>
        <p>
          A contact management web application built with React and Firebase
          Firestore that allows users to add, view, search, update, and delete
          contacts in real time.
        </p>
        <ul>
          <li>React.js</li>
          <li>Firebase</li>
          <li>Formik</li>
          <li>Yup</li>
          <li>Tailwind CSS</li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Subhadeep0707/Firebase-CRUD-App"
        >
          View Source Code
        </a>
      </section>
    </>
  );
};

export default FeaturedProjects;
