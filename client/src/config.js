let variable = {}


if (process.env.NODE_ENV === 'production') {
    variable = {
        DB_ROUTE: "https://natours202122.herokuapp.com/",
        FRONT_ROUTE: "https://natours202122.herokuapp.com/"
    }
} else {
    variable = {
        DB_ROUTE: "http://localhost:9000",
        FRONT_ROUTE: "http://localhost:3000"
    }
}

export default variable