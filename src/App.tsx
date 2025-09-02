import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <TaskInput />
      <Toolbar />
      <TaskList />
      <Footer />
    </Layout>
  );
}

export default App;
