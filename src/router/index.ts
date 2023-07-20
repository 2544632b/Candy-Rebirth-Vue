import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueCookies from 'vue-cookies';

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => {
                axios.get("http://example.com/oauth/un-authorize", {
                    Headers: {
                        "X-Access-Token": VueCookies.get("SESSIONID"),
                    }
                });

               VueCookies.remove("SESSIONID")
                window.location.href = "/";
            },
            meta: {
                requireAuth: true
            }
        }

    ]
})

router.beforeEach(async (to, from, next) => {
    const Session = VueCookies.get("SESSIONID");
    if (to.meta.requireAuth === false) {
        if (!Session) {
            next()
        }
        else {
            next({
                path: '/'
            })
        }
        
    }
    else {
        if (!Session) {
            next({
                path: "/login",
            });
        }
        else {
            next()
        }
    }
});

export default router
