import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import SingleDetails from './SingleDetails';

const ProjectDetails = () => {
    const { id } = useParams()
    let data = useData();
    data = data.filter(item => item.webSiteName === id)
    return (
        <div>
            {data.map(item => <SingleDetails key={item.name} data={item} />)}
        </div>
    );
};

export default ProjectDetails;