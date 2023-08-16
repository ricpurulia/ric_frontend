import React from "react";
import DefultImage from "../Assets/Image/defult-image.jpg";
import "../Assets/Css/ProjectPage.css";
import Loading from "./Loading";
import MemberCard from "./MemberCard";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { useEffect, useState } from "react";

const Projects = () => {
  const params = useParams();
  const id = params;
  console.log(id);

  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fatchData() {
    try {
      setLoading(true);
      const req = await axios.get("/allproject/" + id.id);
      console.log(req.data.project);
      setProject(req.data.project);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fatchData(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          {/* carousel */}
          <div className="project-img">
            <img className="w-100" src={DefultImage} alt=".." />
          </div>

          {/* Project Details */}
          <section className="mt-5">
            <div
              className="text-center font-800 my-4 mx-auto"
              data-aos="zoom-in"
            >
              <h1 className="fw-bold fs-1">{project.name}</h1>
            </div>
            <div className="event-details-text">
              {/* <h2>{project.topic} </h2> */}
              {/* <h6 className="mb-4">{project.startDate}th May 2023, at {project.time} A.M</h6> */}
              <p>
                {project.description}
                <img
                  src={DefultImage}
                  className="d-block w-75 my-4"
                  alt="..."
                />
                <p />
                laboriosam, aspernatur blanditiis nostrum sunt libero,
                repudiandae consectetur expedita ad incidunt est molestiae quas.
                Soluta, at. Et maxime eveniet natus error esse officiis impedit
                fuga quisquam, maiores tenetur eum distinctio itaque dolores
                deleniti a totam atque quidem tempore accusamus quia animi
                suscipit. Rem libero, vero voluptas laudantium placeat eius cum
                aperiam quos facilis, quod q quo fugiat molestiae ipsam eaque
                corporis cupiditate vitae tempore qui illo minima voluptas,
                commodi illum ducimus totam magni et beatae. Voluptatibus
                officia recusandae quis, labore ut enim corrupti nobis sint?
                Commodi qui aliquid eius alias dignissimos, in recusandae? Eum
                illo ex ratione, iure molestiae et provident dolores odit quidem
                quibusdam perspiciatis odio architecto! Officia repudiandae ea
                distinctio. Deserunt laudantium rerum{" "}
                <strong>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas quam cumque id repellendus animi facere quia dicta
                  officiis voluptatibus mollitia.{" "}
                </strong>{" "}
                perferendis, eum, nulla fuga porro dolores dignissimos dolorum
                laborum, pariatur libero eius animi possimus distinctio eveniet
                iure facere dolorem. Quo consectetur deleniti ratione numquam
                voluptas enim repellat pariatur? Suscipit accusamus qui corporis
                velit harum accusantium veniam, delectus recusandae et repellat
                minima totam, soluta sed modi deserunt consequuntur mollitia.
                Maxime porro eius magni cumque, aliq alias et qui repellat labor
                Officiis, rem. Amet ipsam placeat, quas ea obcaecati iusto quam
                asperiores est enim aspernatur impedit facilis quibusdam id,
                consequuntur natus quia sunt quos veritatis cupiditate mollitia!
                Tempora delectus quae vitae magnam numquam repellat! Rerum,
                fugiat iusto eaque voluptas maxime non.
              </p>
                <div className="text-center fw-bold fs-1 mt-2"> Team Member </div>
              <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <MemberCard />
                  <MemberCard />
                  <MemberCard />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Projects;
