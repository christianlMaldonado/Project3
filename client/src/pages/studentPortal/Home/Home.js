import React from 'react'

const studentHome = () => {
    return (

        <div className="container">

            <h4 id="studentName" className="center">Welcome [student name]</h4>

            <div class="row">
                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Submit Assignments</span>
                            <p>[submit assignment here]]</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Review Assignments</a>
                        </div>
                    </div>
                </div>

                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Check-in</span>
                            <p>[Check-in today]</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Review Attendance</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Grades</span>
                            <p>[A B C D F]</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Review Grades</a>
                        </div>
                    </div>
                </div>

                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Mail</span>
                            <p>[You have # unread mails]</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Check Mail</a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Webcam</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>

                <div class="col m6 m6">
                    <div className="center card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Chat</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default studentHome