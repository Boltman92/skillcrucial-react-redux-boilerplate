import React from 'react'

import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return (
    <div id="description">
      {' '}
      <ReactMarkdown source={props.readme} />
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
