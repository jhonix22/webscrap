let cheerio = require('cheerio');
let request = require('request');
var bodyParser = require("body-parser");
let express = require('express');
let app = express();

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.get("/scrape/:job_title/:country",function(req,res){
    let html = "",
        jobtitle = req.params.job_title,
        country  = req.params.country;
        ;
    request({
        url: "https://www.indeed.com/jobs?q="+encodeURIComponent(jobtitle)+"&l="+encodeURIComponent(country),
        method: "GET",
        body: "Test Web Scrapping"
    },function(error, response, body){
        
        console.log("Requesting data URL: https://www.indeed.com/jobs?q="+encodeURIComponent(jobtitle)+"&l="+encodeURIComponent(country))
        
        if(error){
            console.log(error)
        }else{
            let $ = cheerio.load(body);

            $('#univsrch-salary-currentsalary').each(function(i,element){
                /*let el = $(element);
                let txt = el.text();
                console.log(el.html())
                html += '\n'+txt; */
                html = $(element).text();
            })
            res.writeHead(200,{
                    'content-type' : 'text/html',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                        })
            res.end(html,"utf-8");
        }
    })
})