const {Router} = require('express')
const router = Router()
//const auth = require('../auth/auth');//!

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


// GET for logout
router.get('/api/logout', (req, res) => {
    if (req.session) {
        // delete session object
        req.session.destroy(() => {
            res.redirect('/registration');
        });
    } else {
        res.redirect('/');
    }
});

router.get('/registration', function (req, res) {

    let login = req.session.userLogin;
    let id = req.session.userId;
    let name = req.session.userName;

    if (req.session && req.session.userLogin && req.session.userId) {
        console.log(req.session)
        res.render('person', {
            title: 'person',
            isRegistration: true,
            user: {
                login,
                id,
                name
            }
        })
    } else {
        console.log(req.session)
        res.render('registration', {
            title: 'Registration',
            isRegistration: true
        })
    }

})


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