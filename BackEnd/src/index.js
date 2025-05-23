const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 3000;
const route = require('./routes');

const session = require('express-session')
const method_override = require("method-override");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cloudinary = require('cloudinary');
const multer = require("multer");
const bodyParser = require('body-parser');
const flash = require("connect-flash");
const {rateLimit} = require('express-rate-limit');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const corsOptions = {
    origin: `${process.env.FE_URL}`,
    credentials: true, // Allows cookies and authentication header
};

dotenv.config();

// connect to DB, no DB now, do not open the comment below
db.connect();

// cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
});

// middleware -> send JSON to server (form)
app.use(express.urlencoded({
    extended: true,
}));
// app.use(bodyParser.urlencoded({ extended: true }));

// JSON API
app.use(express.json());

// session
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 1000 // 1h
    }
}));

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(flash());

// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000,
//     limit: 1000,
//     standardHeaders: 'draft-7',
//     legacyHeaders: false,
//     message: "Too many requests !!"
// }));

// rest method api
app.use(method_override('_method'));

// log
app.use(morgan('tiny'));

route(app);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

