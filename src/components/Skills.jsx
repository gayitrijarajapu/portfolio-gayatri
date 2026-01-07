const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Accessibility',
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s} className="skill-card">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
