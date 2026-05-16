import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
    return (
        <div className="mywork" id="projects">

            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="mywork-container">

                {mywork_data.map((work, index) => {
                    return (

                        <div key={index} className="mywork-card">

                            <img
                                src={work.w_img}
                                alt={work.w_name}
                                className="mywork-item"
                            />

                            <h3>{work.w_name}</h3>

                            <p>{work.w_desc}</p>

                            <h4>{work.w_tech}</h4>

                            <div className="project-links">

                                {work.w_live && (
                                    <a
                                        href={work.w_live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                <a
                                    href={work.w_github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>

                            </div>

                        </div>
                    );
                })}

            </div>

            {/* <div className="mywork_showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div> */}

        </div>
    );
};

export default MyWork;














// import React from "react";
// import "./MyWork.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

// const MyWork = () => {
//     return (
//         <div className="mywork" id="projects">
//             <div className="mywork-title">
//                 <h1>My Projects</h1>
//                 <img src={theme_pattern} alt="Theme Pattern" />
//             </div>
//             <div className="mywork-container">
//                 {mywork_data.map((work, index) => {
//                     return <img key={index} src={work.w_img} alt={work.title} className="mywork-item" />
//                 })}
//             </div>
//             <div className="mywork_showmore">
//                 <p>Show More</p>
//                 <img src={arrow_icon} alt="Arrow Icon" />
                
//             </div>

//         </div>
//     );
// };

// export default MyWork;
