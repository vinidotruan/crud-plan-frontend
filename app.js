const vm = new Vue({
    el: "#app",
    data: {
        users:[]
    },
    methods: {
        fetchUsers() {
            fetch('http://localhost:8000/api/users')
                .then( response => response.json() )
                .then( response => this.users = response )
        }
    },
    created() {
        this.fetchUsers();
    }
});