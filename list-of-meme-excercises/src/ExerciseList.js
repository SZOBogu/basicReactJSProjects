import React, {useState, useContext} from 'react'
import {MyContext} from './MyContext'

function ExerciseList(){
    const {exercises} = useContext(MyContext)


    return (exercises.length ?(
            <div className="d-flex justify-content-center p-3">
                {
                    exercises.map(exercise => (
                        <div>
                            <p>
                                Name: {exercise.name}
                            </p>
                            <p>
                                Why no one should bother: {exercise.whyMeme}
                            </p>
                            <p>
                                How much does poster bench: {exercise.bench}
                            </p>
                        </div>
                    )
                  )
                }
            </div>
        ):
        (
            <div className="d-flex justify-content-center p-3">
                <p> List empty </p>
            </div>
        )
    );
}

export default ExerciseList;