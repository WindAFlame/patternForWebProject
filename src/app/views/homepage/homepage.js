/*

*/
const homepageState = {
        parent: 'layout',
        url: '/home',
        resolve: null,
        onEnter: null,
        views: {
            // targets datauiview='content' created in 'layout'
            'content@': 'homepage'
        },
        onExit: null,
};
/*

*/
app.component('homepage',{
    bindings: null,
    controller: null,
    templateUrl: 'app/views/homepage/homepage.html'
});