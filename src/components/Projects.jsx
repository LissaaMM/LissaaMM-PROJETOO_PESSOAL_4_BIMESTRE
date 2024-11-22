import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h1>Meus Projetos</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Site de Biologia</h2>
          <p>Site básico de biologia sobre fungos, nele tem expecificando sobre os fungos e suas finalidades.</p>
          <button><a href='https://lissaamm.github.io/requisito-26-sistema-de-toltips/'>Ver Projeto</a></button>
        </div>
        <div className="project-item">
          <h2>Anime Nuxi</h2>
          <p>Esse site serve para listar animes de gêneros entre outros, ele é simples e ainda está em formação</p>
          <button><a href='https://lissaamm.github.io/animenuxi/'>Ver projeto</a></button>
        </div>
        <div className="project-item">
          <h2>Site de Inglês para crianças</h2>
          <p>Esse site tem como finalidade ajudar crianças a aprender inglês de forma breve e simples         </p>
          <button><a href='https://lissaamm.github.io/PROJ_INGLESH/'>Ver projeto</a></button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
