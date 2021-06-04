import React, { useState } from 'react'

function Login() {

    const [requestToken, setRequestToken] = useState()
    const [status, setStatus] = useState()
    const [accessToken, setAccessToken] = useState()

    const handleLogin = (e) => {

        var http = require("https");

        var options = {
          "method": "POST",
          "hostname": "api.themoviedb.org",
          "port": null,
          "path": "/4/auth/request_token",
          "headers": {
            "content-type": "application/json;charset=utf-8",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM0NjBmYjg0MjdiNGRhNTA3YTY0ZTRjODBmM2ExNiIsInN1YiI6IjYwODMxODhiYzQzOWMwMDA0MDY3MWEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcTIEVar3jSFINEs39L9gehSZcmcKTFP7e-DdPHMw_4"
          }
        };
        
        var req = http.request(options, function (res) {
          var chunks = [];
        
          res.on("data", function (chunk) {
            chunks.push(chunk);
          });
        
          res.on("end", function () {
            var body = Buffer.concat(chunks);
            setRequestToken(JSON.parse(body.toString()).request_token);
            setStatus(JSON.parse(body.toString()).success)
          });
        });
        
        req.write(JSON.stringify({ redirect_to: 'http://www.themoviedb.org/' }));
        req.end();
    }

    const handleSecond = (e) => {
        var http = require("https");

        var options = {
        "method": "POST",
        "hostname": "api.themoviedb.org",
        "port": null,
        "path": "/4/auth/access_token",
        "headers": {
            "content-type": "application/json;charset=utf-8",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM0NjBmYjg0MjdiNGRhNTA3YTY0ZTRjODBmM2ExNiIsInN1YiI6IjYwODMxODhiYzQzOWMwMDA0MDY3MWEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcTIEVar3jSFINEs39L9gehSZcmcKTFP7e-DdPHMw_4"
        }
        };

        var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            setAccessToken(JSON.parse(body.toString()).access_token);
        });
        });

        req.write(JSON.stringify({ request_token:  `${requestToken}` }));
        req.end();
    }

    return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center">
            <button onClick={handleLogin}>Login</button>
            {status &&
            <div>
                <h1>Succesfull, please proceed further</h1>
                <button onClick={handleSecond}>Second login</button>
            </div>
            }
            {console.log(accessToken)}
        </div>
    )
}

export default Login
