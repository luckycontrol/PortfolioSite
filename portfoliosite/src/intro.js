import React from 'react';
import intro from './CSS/intro.css';

class Self extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Cho chong woon',
            age: '24',
            country: 'South Korea',
            phone: '010-3591-8251',
            university: 'Korean Bible University',
            interest: 'IOS, DataScience, Web',
            skill: 'SwiftUI, React, Pandas',
            email: 'nurunsagwa@gmail.com',
        };
    }

    render() {
        return (
            <div className={intro.intro_welcome}>
                <p style={{fontSize: '130px', height: '300px'}}> Welcome! </p>

                <hr></hr>

                <div style={{height: '600px'}} className={intro.intro_skills}>
                    <p style={{fontSize: '50px'}}> <b>About Me</b> </p>
                    <p> My Name is {this.state.name}, {this.state.age} old. </p>
                    <p> I go to {this.state.university} </p>
                    <p> Interested in {this.state.interest} </p>
                    <p> My skills are {this.state.skill} </p>
                </div>

                <hr></hr>

                <p style={{height: '600px'}}></p>
            </div>
        )
    }
}

export default Self;
