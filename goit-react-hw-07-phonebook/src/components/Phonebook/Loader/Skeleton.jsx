import React from 'react';
import ContentLoader from 'react-content-loader';

const TaskList = props => {
  return (
    <ContentLoader
      speed={1.3}
      width={439}
      height={162}
      viewBox="0 0 439 160"
      backgroundColor="#d9d9d9"
      foregroundColor="var(--background-card-box)"
      {...props}
    >
      <rect x="392" y="6" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="6" rx="4" ry="4" width="300" height="20" />

      <rect x="392" y="32" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="32" rx="4" ry="4" width="300" height="20" />

      <rect x="392" y="58" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="58" rx="4" ry="4" width="300" height="20" />

      <rect x="392" y="84" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="84" rx="4" ry="4" width="300" height="20" />

      <rect x="392" y="110" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="110" rx="4" ry="4" width="300" height="20" />

      <rect x="392" y="136" rx="4" ry="4" width="47" height="20" />
      <rect x="0" y="136" rx="4" ry="4" width="300" height="20" />
    </ContentLoader>
  );
};

export default TaskList;
