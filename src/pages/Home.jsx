import React from "react";
import ME from "../assets/image/Group 11 1.png";
import "./Home.css";
import Phone from "../assets/image/icomoon-free_mobile.png";
import Tag from "../assets/image/tag 1.png";
import Carbon from "../assets/image/carbon_ibm-engineering-test-mgmt.png";
import Feather from "../assets/image/feather-pen 1.png";
import About from "../assets/image/About Me.png";
import image1 from "../assets/image/Image 3.png";
import image2 from "../assets/image/image 2.png";
import image3 from "../assets/image/Image.png";
import Vector1 from "../assets/image/Vector (1).png";
import Vector2 from "../assets/image/Vector (2).png";
import Vector3 from "../assets/image/Vector (3).png";
import Avatar1 from "../assets/image/Avatar Image.png";
import Avatar2 from "../assets/image/Avatar Image2.png";
import Avatar3 from "../assets/image/Avatar Image3.png";

const Home = () => {
  return (
    <div>
      <section id="home" className="section1">
        <div className="maindiv">
          <div className="subdiv1">
            <p>Hey, I am Precious</p>
            <h1>I develop dynamic and User-Centered Web Applications</h1>
            <h5>
              My expertise spans both front-end and back-end development,
              enabling me to build comprehensive solutions that meet diverse
              clients needs.
            </h5>
            <a href="#contact">
              <button>Get in Touch</button>
            </a>
          </div>
          <div className="subdiv2">
            <img src={ME} alt="" />
          </div>
        </div>
      </section>

      <section id="#" className="section2">
        <div className="seconddiv">
          <div className="second">
            <p>My Skill</p>
            <h1>My Expertise</h1>
          </div>

          <div className="secondsubdiv">
            <div className="secondsubdiv1">
              <div className="img">
                <img src={Phone} alt="" />
              </div>
              <h4>Responsive Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div className="secondsubdiv1">
              <div className="img">
                <img src={Tag} alt="" />
              </div>
              <h4>Front-End Frameworks</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div className="secondsubdiv1">
              <div className="img">
                <img src={Carbon} alt="" />
              </div>
              <h4>Testing and Debugging</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div className="secondsubdiv1">
              <div className="img">
                <img src={Feather} alt="" />
              </div>
              <h4>Cloud Services</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutme" className="section3">
        <div className="thirdsubdiv">
          <div className="thirdsubdiv1">
            <img src={About} alt="" />
          </div>
          <div className="about">
            <p>About</p>
            <h1>About Me</h1>
            <h5>
              I am a dedicated full stack web developer, bringing dynamic and
              user-focused solutions to life. With a solid foundation in
              languages like HTML, CSS and back-end technologies like Node.js
              and datatabase.
            </h5>
            <h5>
              I am passionate about creating web applications that not only meet
              clients requirements but also provide seamless user experiences.
            </h5>
          </div>
        </div>
      </section>

      <section id="portforlio" className="section4">
        <div className="fourthdiv">
          <div className="recent">
            <div className="recent1">
              <p>Recent Projects</p>
              <h1>My Portforlio</h1>
            </div>
            <div className="recent2">
              <a href="https://github.com/Oluwanornor">
                <button>
                  <img src={Vector1} alt="" />
                  Visit My Github
                </button>
              </a>
            </div>
          </div>
          <div className="fourthsubdiv">
            <div className="fourthsubdiv1">
              <img src={image1} alt="" />
              <h4>Ahuse</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="fourthsubdiv2">
                <h5>View Website</h5>
                <img src={Vector2} alt="" />
              </div>
            </div>

            <div className="fourthsubdiv1">
              <img src={image2} alt="" />
              <h4>App Dashboard</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="fourthsubdiv2">
                <h5>View Project</h5>
                <img src={Vector2} alt="" />
              </div>
            </div>
            <div className="fourthsubdiv1">
              <img src={image3} alt="" />
              <h4>Easy Rent</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="fourthsubdiv2">
                <h5>View Website</h5>
                <img src={Vector2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section5">
        <div className="fifthdiv">
          <p>Clients Feedback</p>
          <h1>Custormer Testimonials</h1>
          <div className="fifth">
            <div className="fifthsubdiv">
              <div className="fifthsubdivimg">
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div className="fifthsubdiv0">
                <div className="fifthsubdiv1">
                  <img src={Avatar1} alt="" />
                </div>
                <div className="fifthsubdiv2">
                  <h5>Daniel Russel</h5>
                  <p>Starbucks</p>
                </div>
              </div>
            </div>

            <div className="fifthsubdiv">
              <div className="fifthsubdivimg">
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div className="fifthsubdiv0">
                <div className="fifthsubdiv1">
                  <img src={Avatar2} alt="" />
                </div>
                <div className="fifthsubdiv2">
                  <h5>Kristin Watson</h5>
                  <p>Louis Vuitton</p>
                </div>
              </div>
            </div>

            <div className="fifthsubdiv">
              <div className="fifthsubdivimg">
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div className="fifthsubdiv0">
                <div className="fifthsubdiv1">
                  <img src={Avatar3} alt="" />
                </div>
                <div className="fifthsubdiv2">
                  <h5>Kathryn Murphy</h5>
                  <p>McDonald's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section6">
        <div class="contact-form-container">
          <h2>Get In Touch</h2>
          <h3>Contact me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form class="contact-form">
            <div class="name-container">
              <div>
                <label for="firstName">First name</label>
                <input type="text" name="firstName" required></input>
              </div>
              <div>
                <label for="lastName">Last name</label>
                <input type="text" name="lastName" required></input>
              </div>
            </div>
            <div class="name-container">
              <div>
                <label for="email">Email</label>
                <input type="email" name="email" required></input>
              </div>
              <div>
                <label for="phone">Phone number</label>

                <input type="tel" name="phone" required></input>
              </div>
            </div>
            <label for="message">Message</label>
            <textarea
              name="message"
              placeholder="Type your message..."
              required
            ></textarea>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="label">I accept the terms.</span>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
