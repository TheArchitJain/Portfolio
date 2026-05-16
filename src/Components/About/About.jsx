import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_imge from "../../assets/profile_imge.jpg";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_imge} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a Full Stack Developer and problem solver with
                            experience in modern web technologies including React,
                            Next.js, Node.js, Express.js, and PostgreSQL.
                        </p>

                        <p>
                            I enjoy building responsive and user-focused applications,
                            integrating AI-powered features, and optimizing application
                            performance while continuously improving my skills in DSA
                            and scalable system design.
                        </p>
                    </div>
                    {/* <div className="about-skills"> */}
                    {/* <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{ width: "50%" }} /></div> */}
                    <div className="about-skills">

                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "55%" }} />
                        </div>

                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "64%" }} />
                        </div>

                        <div className="about-skill">
                            <p>React.js</p>
                            <hr style={{ width: "84%" }} />
                        </div>

                        <div className="about-skill">
                            <p>Next.js</p>
                            <hr style={{ width: "68%" }} />
                        </div>

                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr style={{ width: "70%" }} />
                        </div>

                        <div className="about-skill">
                            <p>PostgreSQL</p>
                            <hr style={{ width: "65%" }} />
                        </div>

                        <div className="about-skill">
                            <p>DSA</p>
                            <hr style={{ width: "78%" }} />
                        </div>

                        {/* </div> */}
                    </div>
                </div>

            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Deans List</h1>
                    <p>Achieved for academic excellence in the top 10% of the class.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Deans List</h1>
                    <p>Achieved for academic excellence in the top 10% of the class.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Deans List</h1>
                    <p>Achieved for academic excellence in the top 10% of the class.</p>
                </div>
            </div> */}
            <div className="about-achievements">

                <div className="about-achievement">
                    <h1>Dean's List</h1>

                    <p>
                        Achieved academic excellence by securing a position
                        among the top 5% of the class.
                    </p>
                </div>

            </div>
        </div>

    )
}
export default About;