import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { username } = useParams()

  return (
    <div>
      {props.repos.map((rep) => (
        <div className="bg-indigo-400 text-white rounded p-2 mb-2" key={rep}>
          <Link to={`/${username}/${rep}`}>{rep}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
