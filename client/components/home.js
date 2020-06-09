import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Main from './mainComp'
import Repos from './repolist'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { username, repository } = useParams()
  const url = `https://api.github.com/users/${username}/repos`
  const [repos, setRepos] = useState([])
  const [readme, setReadme] = useState('')
  const urlReadme = `https://api.github.com/repos/${username}/${repository}/readme`

  useEffect(() => {
    if (typeof username !== 'undefined' && typeof repository !== 'undefined') {
      axios.get(urlReadme).then(({ data }) => {
        axios.get(data.download_url).then(({ data: text }) => {
          setReadme(text)
        })
      })
    }
  }, [])

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios.get(url).then((it) => {
        setRepos(it.data.map((repo) => repo.name))
      })
    }
  }, [url])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:username" component={() => <Repos repos={repos} />} />
        <Route exact path="/:username/:repository" component={() => <Readme readme={readme} />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
