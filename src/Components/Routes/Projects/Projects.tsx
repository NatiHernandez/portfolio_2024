import Card from "../../Card/Card";
import './Projects.scss';
import memoImg from "../../../Images/memoTest.png";
import todDList from "../../../Images/ToDo.png";
import flight from "../../../Images/flight.png"

const data = [
    {
        id: 1,
        name: 'Memo Test',
        img: memoImg,
        description: 'A memory game for fun and learning through play. To exercise memory and practice association ',
        link: ''
    },
    {
        id: 2,
        name: 'To Do List',
        img: todDList,
        description: 'Create your own list of items that need to be accomplished, each with a brief description',
        link: ''
    },
    {
        id: 3,
        name: 'Taking Off',
        img: flight,
        description: 'is the leading travel agency in Latin America. Find your flight, hotel, package, and activities with the best online agency',
        link: ''
    },
    {
        id: 4,
        name: 'WIP',
        img: '',
        description: 'Testing',
        link: ''
    },
    {
        id: 5,
        name: 'WIP',
        img: '',
        description: 'Testing',
        link: ''
    }
]

function Projects() {
    return (
        <div className="conteiner">
        {data.map((element) => (
          <Card key={element.id} name={element.name} image={element.img} description={element.description} link={element.link}/>
        ))}
        </div>
    );
}

export default Projects;