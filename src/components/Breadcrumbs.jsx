import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs({ path }) {
  const pathSegments = path.split('/').filter(segment => segment);
  
  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-blue-600 hover:underline">Inicio</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === pathSegments.length - 1 ? (
              <span className="text-gray-500">{segment}</span>
            ) : (
              <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="text-blue-600 hover:underline">
                {segment}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;