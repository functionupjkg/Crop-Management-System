const express = require("express");
const router = express.Router();
// const urlController = require("../controllers/urlController");

//============================post api for shorten url===================>>>
router.post("/crop",function check(){
    console.log('app is working')
    // res.send({'app is working'})
});

//============================get api for redirect url===================>>>
// router.get("/:urlCode", urlController.getUrl);

module.exports = router;
