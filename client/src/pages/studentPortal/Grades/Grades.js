import React from 'react'
import "./Grades.css";

const studentGrades = () => {
    return (

        <div className="grades-container">
            <h4 className="center">Grades</h4>
            <table class="striped">
                <thead>
                    <tr>
                        <th>Assignments</th>
                        <th>Grade Received</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Assignment #1</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Assignments #2</td>
                        <td>A</td>

                    </tr>
                    <tr>
                        <td>Assignments #3</td>
                        <td>B</td>
                    </tr>

                </tbody>
            </table>

        </div>

    )
}

export default studentGrades