"use client";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "../nav/nav-bar";

export default function Home() {
    return (
        <div>
            <Router>
                <NavBar></NavBar>
                <h1>hi</h1>
            </Router>
        </div>

    )
}