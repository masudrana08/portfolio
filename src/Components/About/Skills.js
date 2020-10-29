import React from 'react';
import './Skills.css'
const Skills = () => {
    const skills = ["Javascript", "React.js", "Node.js",  "Express.js", "MongoDB",  "Firebase", "HTML", "CSS", "Bootstrap", "Material UI",
    "Redux.js", "Sass", "Gatsby", "Graphql",
    "WordPress", "C"]

    const expertise=["Javascript", "React.js", "Node.js",  "Express.js", "MongoDB",  "Firebase", "HTML", "CSS", "Bootstrap", "Material UI"]
    const comfortable=["Redux.js", "Sass", "Gatsby", "Graphql"]
    return (
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>My Skill Set</h3>
                <div>
                    {
                        skills.map((skill,index)=>{
                            return(
                                <p key={'skill'+index} className="skill-design">{skill}</p>
                            )
                        })
                    }
                </div>
            </div><br/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>Feel free to work with</h3>
                <div>
                    {
                        expertise.map((expert,index)=>{
                            return(
                                <p key={'expert'+index} className="skill-design">{expert}</p>
                            )
                        })
                    }
                </div>
            </div><br/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <h3>I'm Comfortable to</h3>
                <div>
                    {
                        comfortable.map((comfort, index)=>{
                            return(
                                <p key={"comfort"+index} className="skill-design">{comfort}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;