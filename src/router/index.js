import {createRouter, createWebHistory} from 'vue-router'
import Signup from '../views/Signup'
import Signin from '../views/Signin'
import Home from '../views/Home'
import Recipient from '../views/Recipient'

const routes = [
    {
        path: '/signup', 
        component: Signup
    },
    {
        path: '/', 
        component: Home
    },
    {
        path: '/signin', 
        component: Signin
    },
    {
        path: '/recipient', 
        component: Recipient
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
