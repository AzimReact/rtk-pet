import React, { useState } from 'react';

const Sidebar = () => {
  const [width, setWidth] = useState(true)

  return (
    <div className={`sidebar ${width ? 'w300' : 'w150'}`}>
      <div>Sidebar</div>
      <button className='sidebarWidthBtn' onClick={() => setWidth(!width)}>{width ? 'Close' : 'Open'}</button>
    </div>
  );
};

export default Sidebar;