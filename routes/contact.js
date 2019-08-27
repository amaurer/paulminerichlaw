var express = require("express");
var router = express.Router();
var extend = require('util')._extend;
var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: "contact.paulminerichlaw@gmail.com",
		pass: "M@rlin1!"
	}
});
var mailOptions = {
	 from : "contact.paulminerichlaw@gmail.com"
	,to : "paul@paulminerichlaw.com"
	,subject : "Message from contact form on paulminerichlaw.com"
	,text : ""
}

router.get("/vietnamese-translation-available/", function(req, res) {
	res.render("vietnamese", {
		title : "Vietnamese Translation Available"
		,bread : "vietnamese"
	});
});


router.all("/", function(req, res) {
	var email = "";
	var errors = [];
	if(req.body && req.body.email){
		email = req.body.email;
		errors.push("Please enter your name.");
		errors.push("Please enter a subject.");
		errors.push("Please answer the security question.");
	}
	res.render("contact", {
		title : "Contact Us"
		,bread : "contact"
		,errorYellow : true
		,hideTitle : true
		,email : email
		,errors : errors
	});
});

// TODO : validate email

router.post("/submit/", function(req, res) {

	var errors = [];
	var renderTemplate = "contact";
	var params = extend(req.body, {
		 pageTitle : "Contact Submission"
		,hideHead : true
		,errors : errors
		,hideTitle : true
	});

	if(params.name == null || params.name.length === 0){
		params.errors.push("Name is invalid.");
	};

	if(params.email == null || params.email.length === 0){
		params.errors.push("Email is invalid.");
	};

	if(params.regarding == null || params.regarding.length === 0){
		params.errors.push("Regarding subject is invalid.");
	};

	if(params.securityQuestion == null || params.securityQuestion.length === 0 || params.securityQuestion != 7){
		params.errors.push("Security question is invalid.");
	};

	if(params.errors.length === 0){
		renderTemplate = "contact-submit";

		var mailText = [];
		var theseMailOptions = extend({}, mailOptions);

		mailText.push("Name : " + params.name);
		mailText.push("Email : " + params.email);
		mailText.push("Regarding : " + params.regarding);
		mailText.push("Message : " + params.message);

		theseMailOptions.text = mailText.join("\n");

		transport.sendMail(theseMailOptions, function(e){
			if(e){
				console.log(e);
			};
		})

	};

	res.render(renderTemplate, params);
});


router.get("/privacy/", function(req, res) {
  res.render("privacy", { hideTitle : true });
});



module.exports = router;
