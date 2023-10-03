<template>
    <nav class="navbar is-light">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" to="/">Nuxt Auth</nuxt-link>
                <button class="button navbar-bugger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            {{ loggedInUser.username }}
                        </a>
                        <div class="navbar-dropdown">
                            <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">Logout</a>
                        </div>
                    </div>
                    <template>
                        <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
                        <nuxt-link class="navbar-item" to="/login">Log in</nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async logout() {

        }
    }
}
</script>