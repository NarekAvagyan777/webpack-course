import Post from "./Post"
import './styles/styles.css'
import WebpackLogo from './assets/icon.png'

const post = new Post('Webpack post title', WebpackLogo)

console.log('Post to String:', post.toString())