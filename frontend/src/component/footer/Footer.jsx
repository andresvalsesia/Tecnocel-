import SimpleReactFooter from "simple-react-footer";


render() {
    const description = "Una empresa Argentina haciendo foco en la innovacion y calidad, Tecnocel vende preductos y experiencias...Fundada en 2022 en Cordoba, Argentina, y en expancion hacia el mundo...Tecnocel... Conecta tu mundo!";
    const title = "Cats";
    const columns = [
        {
            title: "Recursos",
            recursos: [
                {
                    nombre: "Acerca",
                    link: "/acerca"
                },
                {
                    nombre: "Careers",
                    link: "/careers"
                },
                {
                    nombre: "Contacto",
                    link: "/contacto"
                },
                {
                    nombre: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    nombre: "Privacidad",
                    link: "/privacidad"
                },
                {
                    nombre: "Terminos",
                    link: "/terminos"
                }
            ]
        },
        {
            title: "Visitanos",
            resources: [
                {
                    nombre: "Ubicación",
                    link: "/ubicación"
                }
            ]
        }
    ];
    return <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="black"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
    />;
};