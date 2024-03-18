import React, { FC } from 'react';
import Pagewrapper from '../layouts/Pagewrapper';

const Tasks: FC = () => {
  return (
    <Pagewrapper>
      <h1>Tasks</h1>
      <ol>
        <li>Work with state (RTK)!!!</li>
        <li>Autorization + private routes</li>
        <li>New routing - free route file + (outlet, nested routes)</li>
        <li>Work with permissions and roles</li>
        <li>Work with formik</li>
        <li>Work with maps</li>
        <li>Work with Tailwind</li>
        <li>Learn some another architectural patterns</li>
      </ol>
    </Pagewrapper>
  );
};

export default Tasks;