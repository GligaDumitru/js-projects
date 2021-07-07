
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

const mockProjects = [
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    },
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    },
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    },
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    },
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    },
    {
        title:'Budget Recorder',
        linkTo:'/budgetRecorder',
        description:'Some Description here'
    }
]

const ProjectsPage = () => {
    return (
        <div className="grid grid-cols-3 gap-4 md:p-20 sm:p-5">
            {
                mockProjects.map(project => (
                    <Link to='/'>
                        <div className="m-5 h-40">
                        <ProjectItem {...project} />

                        </div>
                    </Link>
                )
                   
                )
            }

        </div>
    )
}

export default ProjectsPage