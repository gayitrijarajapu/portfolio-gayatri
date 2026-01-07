import p1 from '../assets/project1.svg';
import p2 from '../assets/project2.svg';
import p3 from '../assets/profile.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'MiniHelpDesk',
      desc: 'A task & project management UI inspired by ClickUp',
      img: p1,
    },
    {
      title: 'Clinic Management UI',
      desc: 'A responsive frontend for clinic appointment management',
      img: p2,
    },
    {
      title: 'This Portfolio',
      desc: 'This live portfolio website — the project you are viewing now.',
      img: p3,
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
