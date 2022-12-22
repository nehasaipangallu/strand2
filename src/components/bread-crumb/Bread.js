import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
  
export default function App() {
  return (
    <div style={{ display: 'block', 
                  width: 700, padding: 30 }}>
      <h4>React-Bootstrap Breadcrumb Component</h4>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
           Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Profile
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Details
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}