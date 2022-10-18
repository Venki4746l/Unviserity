import React from 'react';
import 'antd/dist/antd.css';



import {  Layout } from 'antd';
import './AdminLogin.css'


const { Content } = Layout;




const AdminHome = () => (
  <Layout>
    {/* <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header> */}
      
      <Layout >
        <Content
          className="site-layout-background" 
        >
          Wellcome to Admin
        </Content>
      </Layout>
    
  </Layout>
);

export default AdminHome ;
