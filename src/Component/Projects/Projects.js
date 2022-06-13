import React from 'react';
import useData from '../../Hooks/useData';
import Project from './Project/Project';

const Projects = () => {
    const data = useData();
    return (
        <div className='container my-5'>
            {data.map(item => <Project key={item.webSiteName} data={item} />)}
        </div>
    );
};

export default Projects;