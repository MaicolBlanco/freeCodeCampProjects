import React from "react";
import { Contenido } from "./Contenido";

const Testimonio = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h1>Estos es lo que dicen nuestros estudiantes de React</h1>
        <Contenido
          name="Shaw Wang"
          country="Singapur"
          position={"Ingeniero de software"}
          company={"Claro"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea omnis optio ipsam asperiores corporis, eveniet eligendi, velit commodi quo officiis eum ratione neque reiciendis. Voluptatibus ut rerum vero saepe!"
          }
        />
        <Contenido
          name={"Emma Bostion"}
          country={"Suecia"}
          company={"Google"}
          position={"Ingeniera de Software"}
          text={
            "jjaja jajaja aj ajhs asjaijdk lasjd kasjdaskjd kasjd kasjd kasjd kasj"
          }
        />
      </div>
    </React.Fragment>
  );
};

export { Testimonio };
