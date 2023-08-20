import React from 'react'
import styles from  './cohort.css'
const CohortTable = ({params}) => {

    return (
        <div>
            {/* <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Session</th>
                        <th>Formule</th>
                        <th>Age</th>
                        <th>Ville</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, index) => (
                        <tr key={index}>
                            <td>{`${student.nom} ${student.prenom}`}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>{student.compus}</td>
                            <td>{student.session}</td>
                            <td>{student.formule}</td>
                            <td>{student.age}</td>
                            <td>{student.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            dynamicRouter{params.cohortID}
        </div>
    )
}
export default CohortTable;