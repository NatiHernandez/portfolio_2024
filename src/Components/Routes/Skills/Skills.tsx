import CardSkills from "../../CardSkills/CardSkills";
import './Skills.scss';
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSap } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaSass } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

const data = [
    {
        id: 1,
        name: 'HTML',
        img: <DiHtml5/>,
    },
    {
        id: 2,
        name: 'CSS',
        img: <FaCss3Alt/>,
    },
    {
        id: 3,
        name: 'Javascript',
        img: <IoLogoJavascript/>,
    },
    {
        id: 4,
        name: 'React',
        img: <FaReact/>,
    },
    {
        id: 5,
        name: 'Node',
        img: <FaNode/>,
    },
    {
        id: 6,
        name: 'MongoDB',
        img: <DiMongodb/>,
    },
    {
        id: 7,
        name: 'UI5/FIORI',
        img: <SiSap/>,
    },
    {
        id: 8,
        name: 'HANA DB',
        img: <LuDatabaseBackup/>,
    },
    {
        id: 9,
        name: 'SASS',
        img: <FaSass/>,
    },
    {
        id: 10,
        name: 'SQL',
        img: <AiOutlineConsoleSql/>,
    }
]

function Skills() {
    return (
        <div className="conteiner">
        {data.map((element) => (
          <CardSkills key={element.id} name={element.name}>
            {element.img}
          </CardSkills>
        ))}
        </div>
    );
}

export default Skills;