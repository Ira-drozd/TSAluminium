const { Router } = require('express')
const router = Router()

//const exphbs = require('express-handlebars')


router.get('/', function (req, res) {
    res.render('index', {
        title: 'TS-Aluminium',
        isIndex: true
    })
})

router.get('/products', function (req, res) {
    res.render('products', {
        title: 'Products',
        isProducts: true
    })
})

router.get('/catalog', function (req, res) {
    res.render('catalog', {
        title: 'Catalog',
        isCatalog: true
    })
})

router.get('/gallery', function (req, res) {
    res.render('gallery', {
        title: 'Gallery',
        isGallery: true
    })
})

router.get('/registration', function (req, res) {
    res.render('registration', {
        title: 'Registration',
        isRegistration: true
    })
})


/*exphbs.registerHelper("createStringList", function(array){

    var result="";
    for(var i=0; i<array.length; i++){
        result +="<li>" + array[i] + "</li>";
    }
    return new hbs.SafeString("<ul>" + result + "</ul>");
});*/

router.get('/news', function (req, res) {
    res.render('news', {
        title: 'News',
        isNews: true
    })
})

router.get('/contacts', function (req, res) {
    res.render('contacts', {
        title: 'Contacts',
        isContacts: true
    })
})

router.get('/plain-roof', function (req, res) {
    res.render('plain-roof', {
        title: 'Plain roof',
        isNews: true
    })
})


module.exports = router