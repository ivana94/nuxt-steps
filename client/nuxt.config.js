export default {
    modules: ["@nuxtjs/axios"],
    axios: {
        baseURL: "http://localhost:8080", // Used as fallback if no runtime config is provided
    },
    css: ["~/assets/main.css"],
    components: {
        dirs: [
            "~/components",
            {
                path: "~/components/data/",
                prefix: "Data",
            },
            {
                path: "~/components/intro/",
                prefix: "Intro",
            },
        ],
    },
};
