import React from "react";

const About = () => {
  const style = {
    margin: "8px",
  };
  return (
    <div style={style}>
      <h2>Informação</h2>
      <hr />
      <h3>Alunos</h3>
      <hr />
      <p>
        Samuel Luis n20461 e Rodrigo Pereira nº20446 <br />
      </p>
      <hr />
      <br />
      <h3>Disciplina</h3>
      <hr />
      <p>
        Este trabalho foi criado para a unidade curricular: <br />
        Tecnologias da Internet II
        <br />
        <br />
        Engenharia Informática
        <br />
        2º Ano
        <br />
        2º Semestre
        <br />
        Ano letivo 2020/2021
      </p>
    </div>
  );
};

export default About;
