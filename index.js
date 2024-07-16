require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const githubData = {
  "login": "FinestWay",
  "id": 139911372,
  "node_id": "U_kgDOCFbgzA",
  "avatar_url": "https://avatars.githubusercontent.com/u/139911372?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/FinestWay",
  "html_url": "https://github.com/FinestWay",
  "followers_url": "https://api.github.com/users/FinestWay/followers",
  "following_url": "https://api.github.com/users/FinestWay/following{/other_user}",
  "gists_url": "https://api.github.com/users/FinestWay/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/FinestWay/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/FinestWay/subscriptions",
  "organizations_url": "https://api.github.com/users/FinestWay/orgs",
  "repos_url": "https://api.github.com/users/FinestWay/repos",
  "events_url": "https://api.github.com/users/FinestWay/events{/privacy}",
  "received_events_url": "https://api.github.com/users/FinestWay/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-07-18T17:55:31Z",
  "updated_at": "2024-07-14T11:37:12Z"
}

app.get('/', (req,res) => {
    res.send('<h1> You are in home page </h1>')
})

app.get('/contacts', (req,res) => {
    res.send('<h1> You are in contacts page </h1>')
})

app.get('/about', (req,res) => {
    res.send('<h1> This is about page </h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}` );
})