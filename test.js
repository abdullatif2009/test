var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'NcS8h6TbTwt8FUgMY7iMBMcrs',
    consumer_secret: 'drshQTlHjBNS5MikewCBwTFUrlkYdlR7ICYOswluj2oAcgYRek',
    access_token_key: '2830226240-FyxcpVevJysKWMEzBKiyq97mOoZVtga8EDpUjVB',
    access_token_secret: 'SCUdXqHsBI9cUvS6SeVdBkoD26WrdjiRHtD360n2Pyn4x'
});

client.post('statuses/update', {status: 'I Love Twitter 2'},  function(error, tweet, response){
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});