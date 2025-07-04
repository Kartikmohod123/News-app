import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import './App.css'; // Ensure your dark mode styles are here

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
    theme: 'light'
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  toggleTheme = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: newTheme }, () => {
      document.body.className = newTheme;
    });
  };

  componentDidMount() {
    document.body.className = this.state.theme;
  }

  render() {
    return (
      <Router>
        <Navbar toggleTheme={this.toggleTheme} theme={this.state.theme} />
        <LoadingBar height={3} color="#ff0000" progress={this.state.progress} />
        <div className="container my-4">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="General"
                  pageSize={this.pageSize}
                  country="us"
                  category="General"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Business"
                  pageSize={this.pageSize}
                  country="us"
                  category="Business"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="Entertainment"
                />
              }
            />
            <Route
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Health"
                  pageSize={this.pageSize}
                  country="us"
                  category="Health"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Science"
                  pageSize={this.pageSize}
                  country="us"
                  category="Science"
                />
              }
            />
            <Route
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="Sports"
                />
              }
            />
            <Route
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="Technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="Technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
