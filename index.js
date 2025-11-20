require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const githubData = {
    "login": "mannanj21",
    "id": 159246758,
    "node_id": "U_kgDOCX3ppg",
    "avatar_url": "https://avatars.githubusercontent.com/u/159246758?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mannanj21",
    "html_url": "https://github.com/mannanj21",
    "followers_url": "https://api.github.com/users/mannanj21/followers",
    "following_url": "https://api.github.com/users/mannanj21/following{/other_user}",
    "gists_url": "https://api.github.com/users/mannanj21/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mannanj21/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mannanj21/subscriptions",
    "organizations_url": "https://api.github.com/users/mannanj21/orgs",
    "repos_url": "https://api.github.com/users/mannanj21/repos",
    "events_url": "https://api.github.com/users/mannanj21/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mannanj21/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2024-02-07T09:33:46Z",
    "updated_at": "2025-11-20T08:00:03Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('mannandotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1> pls login to chai aur code </h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
