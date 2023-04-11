import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import "../Assets/Css/Events.css";
import DefultImage from "../Assets/Image/defult-image.jpg";


export default function EventPage() {
  const params = useParams();
  const id = params;

  const [events, setEvents] = useState({});

  async function fatchData() {
    const req = await axios.get("/getAllEvent/" + id.id);
    setEvents(req.data.event);
  }
  useEffect(() => {
    fatchData();// eslint-disable-next-line 
  }, []);

  return (
    <div>

      {/* carousel */}
      <div className="project-carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={DefultImage} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>

                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={DefultImage} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={DefultImage} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Project Details */}
      <section className="mt-5">

          <div className="text-center font-800 my-4 mx-auto" data-aos="zoom-in">
            <h1 className="fw-bold fs-1">{events.name}</h1>
          </div>
          <div className="project-details-text" data-aos="fade-up">
            <h2>{events.topic} </h2>
            <h6 className="mb-4">{events.startDate}th May 2023, at {events.time} A.M</h6>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, harum? Eveniet provident autem ducimus officia distinctio nostrum aut ullam quo facilis laborum iusto veritatis voluptatem rerum hic laudantium aliquid unde totam fugit, quasi magnam praesentium exercitationem. Quibusdam dolor illum repudiandae, voluptates accusantium mollitia deleniti earum. Recusandae beatae fugiat accusantium et possimus necessitatibus animi vel amet facilis minus voluptatum, impedit natus omnis aspernatur laboriosam, ut corrupti! Sed totam itaque iure vero rem cum dolores at laudantium minus similique dolor sunt, amet unde facere iste quo recusandae voluptatum fuga repellat, eligendi voluptatibus aut reiciendis vel voluptates. Dolor praesentium quo quaerat officiis, qui culpa ut provident nulla dolore dignissimos quisquam velit commodi tempora sit hic earum. Deleniti placeat quae iusto vitae doloribus, soluta voluptates dolor laudantium laborum quasi sit non architecto exercitationem. Veritatis suscipit omnis ex debitis itaque impedit consequuntur, ullam aliquid at quo id explicabo mollitia voluptas est blanditiisihil sunt! Iusto, magni porro. Ut atque earum nihil beatae exercitationem ducimus, quia tempore laudantium hic voluptate labore minus vel veritatis eum quas dolorum? Quasi ad ipsa vero, sit tempora <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur laborum fuga nihil consequatur, odio neque dicta officia sit cumque!</strong> consequatur perferendis hic eaque temporibus officia vel vitae nesciunt fugit accusamus laborum neque magnam ullam cum deserunt quam? Temporibus harum, eum architecto laboriosam nihil ipsa reprehenderit sunt quibusdam maxime sed voluptate deserunt in aliquid eligendi voluptas fugit aperiam odio quo esse doloribus qui, natus cupiditate, cumque eaque? Totam veritatis culpa officia obcaecati aliquid reiciendis omnis. Molestiae quia repudiandae exercitationem voluptatibus dolorem ea est! Asperiores provident voluptatibus eligendi,</p>
            <img src={DefultImage} className="d-block w-75 my-4" alt="..." />
            <p>
            laboriosam, aspernatur blanditiis nostrum sunt libero, repudiandae consectetur expedita ad incidunt est molestiae quas. Soluta, at. Et maxime eveniet natus error esse officiis impedit fuga quisquam, maiores tenetur eum distinctio itaque dolores deleniti a totam atque quidem tempore accusamus quia animi suscipit. Rem libero, vero voluptas laudantium placeat eius cum aperiam quos facilis, quod q quo fugiat molestiae ipsam eaque corporis cupiditate vitae tempore qui illo minima voluptas, commodi illum ducimus totam magni et beatae. Voluptatibus officia recusandae quis, labore ut enim corrupti nobis sint? Commodi qui aliquid eius alias dignissimos, in recusandae? Eum illo ex ratione, iure molestiae et provident dolores odit quidem quibusdam perspiciatis odio architecto! Officia repudiandae ea distinctio. Deserunt laudantium rerum <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quam cumque id repellendus animi facere quia dicta officiis voluptatibus mollitia.  </strong> perferendis, eum, nulla fuga porro dolores dignissimos dolorum laborum, pariatur libero eius animi possimus distinctio eveniet iure facere dolorem. Quo consectetur deleniti ratione numquam voluptas enim repellat pariatur? Suscipit accusamus qui corporis velit harum accusantium veniam, delectus recusandae et repellat minima totam, soluta sed modi deserunt consequuntur mollitia. Maxime porro eius magni cumque, aliq alias et qui repellat labor Officiis, rem. Amet ipsam placeat, quas ea obcaecati iusto quam asperiores est enim aspernatur impedit facilis quibusdam id, consequuntur natus quia sunt quos veritatis cupiditate mollitia! Tempora delectus quae vitae magnam numquam repellat! Rerum, fugiat iusto eaque voluptas maxime non.</p>
          </div>
       
      </section>
    </div>
  );
}
